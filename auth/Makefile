run: main.go
	go run main.go

tidy:
	go mod tidy
	go mod vendor

proto-gen: proto/
	protoc -I proto/ proto/*.proto --go_out=pb --go-grpc_out=pb

