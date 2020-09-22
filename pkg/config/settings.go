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
package config

import (
	"os"
	"strings"
)

var Settings *configuration = &configuration{}

func Initialize() error {
	Settings.Version = version
	setGRPCPort()
	setHTTPPort()
	setCORSOrigins()
	return nil
}

func setGRPCPort() {
	Settings.GRPCPort = "8080"

	if customPort := os.Getenv("OPLY_GRPC_PORT"); customPort != "" {
		Settings.GRPCPort = customPort
	}
}

func setHTTPPort() {
	Settings.HTTPPort = "80"

	if customPort := os.Getenv("OPLY_HTTP_PORT"); customPort != "" {
		Settings.HTTPPort = customPort
	}
}

func setCORSOrigins() {
	Settings.CORSOrigins = []string{}

	if customOrigins := os.Getenv("OPLY_CORS_ORIGINS"); customOrigins != "" {
		Settings.CORSOrigins = strings.Split(customOrigins, ",")
	}
}
