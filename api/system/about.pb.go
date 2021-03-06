// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.23.0
// 	protoc        v3.13.0
// source: api/system/about.proto

package system

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type SystemInformation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Version string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
}

func (x *SystemInformation) Reset() {
	*x = SystemInformation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_system_about_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SystemInformation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SystemInformation) ProtoMessage() {}

func (x *SystemInformation) ProtoReflect() protoreflect.Message {
	mi := &file_api_system_about_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SystemInformation.ProtoReflect.Descriptor instead.
func (*SystemInformation) Descriptor() ([]byte, []int) {
	return file_api_system_about_proto_rawDescGZIP(), []int{0}
}

func (x *SystemInformation) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

type AboutRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AboutRequest) Reset() {
	*x = AboutRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_system_about_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AboutRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AboutRequest) ProtoMessage() {}

func (x *AboutRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_system_about_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AboutRequest.ProtoReflect.Descriptor instead.
func (*AboutRequest) Descriptor() ([]byte, []int) {
	return file_api_system_about_proto_rawDescGZIP(), []int{1}
}

var File_api_system_about_proto protoreflect.FileDescriptor

var file_api_system_about_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2f, 0x61, 0x62, 0x6f,
	0x75, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d,
	0x22, 0x2d, 0x0a, 0x11, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x22,
	0x0e, 0x0a, 0x0c, 0x41, 0x62, 0x6f, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x32,
	0x4a, 0x0a, 0x0c, 0x41, 0x62, 0x6f, 0x75, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x3a, 0x0a, 0x05, 0x41, 0x62, 0x6f, 0x75, 0x74, 0x12, 0x14, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65,
	0x6d, 0x2e, 0x41, 0x62, 0x6f, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19,
	0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2e, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x49, 0x6e,
	0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x00, 0x42, 0x0c, 0x5a, 0x0a, 0x61,
	0x70, 0x69, 0x2f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_api_system_about_proto_rawDescOnce sync.Once
	file_api_system_about_proto_rawDescData = file_api_system_about_proto_rawDesc
)

func file_api_system_about_proto_rawDescGZIP() []byte {
	file_api_system_about_proto_rawDescOnce.Do(func() {
		file_api_system_about_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_system_about_proto_rawDescData)
	})
	return file_api_system_about_proto_rawDescData
}

var file_api_system_about_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_api_system_about_proto_goTypes = []interface{}{
	(*SystemInformation)(nil), // 0: system.SystemInformation
	(*AboutRequest)(nil),      // 1: system.AboutRequest
}
var file_api_system_about_proto_depIdxs = []int32{
	1, // 0: system.AboutService.About:input_type -> system.AboutRequest
	0, // 1: system.AboutService.About:output_type -> system.SystemInformation
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_api_system_about_proto_init() }
func file_api_system_about_proto_init() {
	if File_api_system_about_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_system_about_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SystemInformation); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_system_about_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AboutRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_system_about_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_system_about_proto_goTypes,
		DependencyIndexes: file_api_system_about_proto_depIdxs,
		MessageInfos:      file_api_system_about_proto_msgTypes,
	}.Build()
	File_api_system_about_proto = out.File
	file_api_system_about_proto_rawDesc = nil
	file_api_system_about_proto_goTypes = nil
	file_api_system_about_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// AboutServiceClient is the client API for AboutService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AboutServiceClient interface {
	About(ctx context.Context, in *AboutRequest, opts ...grpc.CallOption) (*SystemInformation, error)
}

type aboutServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAboutServiceClient(cc grpc.ClientConnInterface) AboutServiceClient {
	return &aboutServiceClient{cc}
}

func (c *aboutServiceClient) About(ctx context.Context, in *AboutRequest, opts ...grpc.CallOption) (*SystemInformation, error) {
	out := new(SystemInformation)
	err := c.cc.Invoke(ctx, "/system.AboutService/About", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AboutServiceServer is the server API for AboutService service.
type AboutServiceServer interface {
	About(context.Context, *AboutRequest) (*SystemInformation, error)
}

// UnimplementedAboutServiceServer can be embedded to have forward compatible implementations.
type UnimplementedAboutServiceServer struct {
}

func (*UnimplementedAboutServiceServer) About(context.Context, *AboutRequest) (*SystemInformation, error) {
	return nil, status.Errorf(codes.Unimplemented, "method About not implemented")
}

func RegisterAboutServiceServer(s *grpc.Server, srv AboutServiceServer) {
	s.RegisterService(&_AboutService_serviceDesc, srv)
}

func _AboutService_About_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AboutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AboutServiceServer).About(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/system.AboutService/About",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AboutServiceServer).About(ctx, req.(*AboutRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AboutService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "system.AboutService",
	HandlerType: (*AboutServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "About",
			Handler:    _AboutService_About_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/system/about.proto",
}
