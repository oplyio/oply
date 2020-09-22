/*
Copyright 2020 Oply

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package server

import (
	"net/http"

	grpcMiddleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpcLogrus "github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/oplyio/oply/api/system"
	"github.com/oplyio/oply/pkg/config"
	"github.com/sirupsen/logrus"
	"github.com/urfave/negroni"
	"google.golang.org/grpc"
)

func GRPCServer() (*grpc.Server, http.Handler) {
	logEntry := logrus.NewEntry(logrus.StandardLogger())

	s := grpc.NewServer(
		grpcMiddleware.WithUnaryServerChain(
			grpcLogrus.UnaryServerInterceptor(logEntry),
		),
		grpcMiddleware.WithStreamServerChain(
			grpcLogrus.StreamServerInterceptor(logEntry),
		),
	)

	system.RegisterAboutServiceServer(s, &aboutServer{})

	return s, httpHandler(s)
}

func httpHandler(s *grpc.Server) http.Handler {
	wrapped := grpcweb.WrapServer(
		s,
		grpcweb.WithOriginFunc(handleCORSOrigins),
	)

	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("public")))

	mw := negroni.New(
		negroni.NewLogger(),
	)

	mw.UseHandler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if wrapped.IsGrpcWebRequest(r) || wrapped.IsAcceptableGrpcCorsRequest(r) {
			wrapped.ServeHTTP(w, r)
			return
		}

		mux.ServeHTTP(w, r)
	}))

	return mw
}

func handleCORSOrigins(origin string) bool {
	for _, o := range config.Settings.CORSOrigins {
		if origin == o {
			return true
		}
	}

	return false
}
