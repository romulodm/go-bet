package server

import (
	"github.com/romulodm/go-bet/auth/config"
	db "github.com/romulodm/go-bet/auth/database/sqlc"
	"github.com/romulodm/go-bet/auth/jwt"
	"github.com/romulodm/go-bet/auth/pb/github.com/romulodm/gobet/auth/pb"
)

/*

	This package implements the authentication services that are called by gPRC requests

*/

type Server struct {
	pb.UnimplementedAuthenticationServiceServer
	config       config.Config
	store        db.Store
	tokenManager jwt.Manager
}

func NewServer(config config.Config, store db.Store, jwtManager jwt.Manager) (*Server, error) {
	server := &Server{
		config:       config,
		store:        store,
		tokenManager: jwtManager,
	}

	return server, nil
}
