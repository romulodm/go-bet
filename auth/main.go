package main

import (
	"context"
	"database/sql"
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
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

	go runGateway(config, *store, *jwtManager)
	runGRPC(config, *store, *jwtManager)

}

func runGRPC(config config.Config, store db.Store, jwtManager jwt.Manager) {
	server, err := server.NewServer(config, store, jwtManager)
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

func runGateway(config config.Config, store db.Store, jwtManager jwt.Manager) {
	server, err := server.NewServer(config, store, jwtManager)
	if err != nil {
		log.Fatal("Cannot create server:", err)
	}

	grpcMux := runtime.NewServeMux()

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	err = pb.RegisterAuthenticationServiceHandlerServer(ctx, grpcMux, server)
	if err != nil {
		log.Fatal("Cannot register handler server:", err)
	}

	mux := http.NewServeMux()
	mux.Handle("/", grpcMux)

	listener, err := net.Listen("tcp", config.HTTPServerAddress)
	if err != nil {
		log.Fatal("Cannot create HTTP gateway listener:", err)
	}

	log.Printf("Starting HTTP Gateway server at %s", listener.Addr().String())
	err = http.Serve(listener, mux)
	if err != nil {
		log.Fatal("Cannot start HTTP gateway server:", err)
	}

}
