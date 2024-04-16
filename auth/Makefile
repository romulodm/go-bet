run: main.go
	go run main.go

tidy:
	go mod tidy
	go mod vendor

proto-gen: proto/
	protoc -I proto/ proto/*.proto --go_out=pb --go-grpc_out=pb

rundb:
	docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

execdb:
	docker exec -it postgres12 psql -U root

logsdb:
	docker logs postgres12