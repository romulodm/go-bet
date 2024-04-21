run: main.go
	go run main.go

tidy:
	go mod tidy
	go mod vendor

createdb:
	docker exec -it gobet createdb --username=root --owner=root gobet

dropdb:
	docker exec -it gobet dropdb gobet

proto-gen: proto/
	protoc -I proto/ proto/*.proto --go_out=pb --go-grpc_out=pb \
	--grpc-gateway_out=pb --grpc-gateway_opt=paths=source_relative

rundb:
	docker run --name gobet -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

execdb:
	docker exec -it gobet psql -U root

logsdb:
	docker logs postgres12