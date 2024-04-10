run: main.go
	go run main.go

tidy:
	go mod tidy
	go mod vendor

proto-gen: proto/auth.proto
    protoc -I proto --go-grpc_out=plugins=grpc:pb/ proto/auth.proto
