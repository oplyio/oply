# Oply

## Development

Use `docker-compose` to start local development containers. 
```sh
docker-compose up
```
This will run a Go service that automatically re-compiles changes and runs Oply's HTTP API service on `localhost:3001`, and GRPC service on `localhost:8080`

For the frontend UI, install dependencies and run webpack using `npm`
```sh
npm install
npm start
```
This will start the UI on `localhost:3000`

### GRPC
To regenerate GRPC code, install protobuf and plugins:
```sh
brew install protoc-gen-go
brew install protoc-gen-grpc-web
```

Then run
```sh
make proto
```

### Environment
Environment defaults for development are set in the `.env` file. To override, create a `.env.local` file with any custom values.