import * as jspb from 'google-protobuf'



export class SystemInformation extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): SystemInformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemInformation.AsObject;
  static toObject(includeInstance: boolean, msg: SystemInformation): SystemInformation.AsObject;
  static serializeBinaryToWriter(message: SystemInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemInformation;
  static deserializeBinaryFromReader(message: SystemInformation, reader: jspb.BinaryReader): SystemInformation;
}

export namespace SystemInformation {
  export type AsObject = {
    version: string,
  }
}

export class AboutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AboutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AboutRequest): AboutRequest.AsObject;
  static serializeBinaryToWriter(message: AboutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AboutRequest;
  static deserializeBinaryFromReader(message: AboutRequest, reader: jspb.BinaryReader): AboutRequest;
}

export namespace AboutRequest {
  export type AsObject = {
  }
}

