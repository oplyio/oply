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
package main

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"time"

	_ "github.com/joho/godotenv/autoload"
	"github.com/oplyio/oply/pkg/config"
	"github.com/oplyio/oply/pkg/server"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
)

func init() {
	log.SetLevel(log.DebugLevel)
}

func main() {
	if err := config.Initialize(); err != nil {
		log.Fatalln(err)
	}

	log.Println(fmt.Sprintf("Oply server %s", config.Settings.Version))

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	ctx, cancel := context.WithCancel(context.Background())
	go func() {
		<-c
		cancel()
	}()

	grpcServer, httpHandler := server.GRPCServer()
	wg := sync.WaitGroup{}
	wg.Add(2)

	go func() {
		runGRPCServer(ctx, &wg, grpcServer)
	}()

	go func() {
		runHTTPServer(ctx, &wg, httpHandler)
	}()

	wg.Wait()
	log.Println("Bye!")
}

func runGRPCServer(ctx context.Context, wg *sync.WaitGroup, s *grpc.Server) {
	address := fmt.Sprintf(":%s", config.Settings.GRPCPort)
	listener, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalln(err)
	}

	go func() {
		if err := s.Serve(listener); err != nil {
			log.Fatalln(err)
		}
	}()

	log.Println(fmt.Sprintf("Started GRPC server on %s", address))
	<-ctx.Done()

	s.GracefulStop()
	log.Println("Shutdown GRPC server")

	wg.Done()
}

func runHTTPServer(ctx context.Context, wg *sync.WaitGroup, handler http.Handler) {
	address := fmt.Sprintf(":%s", config.Settings.HTTPPort)
	srv := http.Server{
		Addr:    address,
		Handler: handler,
	}

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalln(err)
		}
	}()

	log.Println(fmt.Sprintf("Started HTTP server on %s", address))
	<-ctx.Done()

	ctxShutdown, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer func() {
		cancel()
	}()

	if err := srv.Shutdown(ctxShutdown); err != nil {
		log.Fatalln(err)
	}
	log.Println("Shutdown HTTP server")

	wg.Done()
}
