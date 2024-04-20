package main

import (
	"database/sql"
	"log"
	"net"

	_ "github.com/lib/pq"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/romulodm/go-bet/auth/config"
	db "github.com/romulodm/go-bet/auth/database/sqlc"
	"github.com/romulodm/go-bet/auth/jwt"
	"github.com/romulodm/go-bet/auth/pb/github.com/romulodm/gobet/auth/pb"
	"github.com/romulodm/go-bet/auth/server"
)

func main() {
	config, err := config.LoadConfig()
	if err != nil {
		log.Fatal("Cannot load config:", err)
	}

	conn, err := sql.Open(config.DBDriver, config.GetDatabaseURL())
	if err != nil {
		log.Fatal("Error to connect DB:", err)
	}

	store := db.NewStore(conn)
	jwtManager := jwt.NewManager([]byte(config.JWTSecretKey))

	server, err := server.NewServer(config, *store, *jwtManager)
	if err != nil {
		log.Fatal("Cannot create server:", err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterAuthenticationServiceServer(grpcServer, server)
	reflection.Register(grpcServer)

	listener, err := net.Listen("tcp", config.GRPCServerAddress)
	if err != nil {
		log.Fatal("Cannot create gRPC listener:", err)
	}

	log.Printf("Starting gRPC server at %s", listener.Addr().String())
	err = grpcServer.Serve(listener)
	if err != nil {
		log.Fatal("Cannot start gRPC server:", err)
	}
}
