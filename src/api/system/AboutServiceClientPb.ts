/**
 * @fileoverview gRPC-Web generated client stub for system
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_system_about_pb from '../../api/system/about_pb';


export class AboutServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAbout = new grpcWeb.AbstractClientBase.MethodInfo(
    api_system_about_pb.SystemInformation,
    (request: api_system_about_pb.AboutRequest) => {
      return request.serializeBinary();
    },
    api_system_about_pb.SystemInformation.deserializeBinary
  );

  about(
    request: api_system_about_pb.AboutRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_system_about_pb.SystemInformation>;

  about(
    request: api_system_about_pb.AboutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_system_about_pb.SystemInformation) => void): grpcWeb.ClientReadableStream<api_system_about_pb.SystemInformation>;

  about(
    request: api_system_about_pb.AboutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_system_about_pb.SystemInformation) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.AboutService/About',
        request,
        metadata || {},
        this.methodInfoAbout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.AboutService/About',
    request,
    metadata || {},
    this.methodInfoAbout);
  }

}

