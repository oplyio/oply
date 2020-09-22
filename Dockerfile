FROM node:12.18 as node
COPY package* /app/
WORKDIR /app
RUN npm install
COPY . /app
ENV NODE_ENV=production
RUN npm run build

FROM golang:1.15-alpine as go
RUN apk add --update --no-cache make
COPY . /app
WORKDIR /app
RUN make server

FROM alpine:3.12
COPY --from=node /app/build /app/public
COPY --from=go /app/build/oplyserver /usr/local/bin/oplyserver
WORKDIR /app
CMD ["oplyserver"]