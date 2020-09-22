.PHONY: server test image proto

server:
	GOFLAGS="-mod=vendor" go build -o ./build/oplyserver ./cmd/oplyserver/...

test:
	go test -v ./...

image:
	docker build -t oplyio/oplyserver .

proto:
	protoc ./api/**/*.proto \
		--go_out=plugins=grpc:. \
		--js_out=import_style=commonjs,binary:./src \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src
