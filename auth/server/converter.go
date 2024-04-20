package server

import (
	db "github.com/romulodm/go-bet/auth/database/sqlc"
	"github.com/romulodm/go-bet/auth/pb/github.com/romulodm/gobet/auth/pb"
)

func convertUser(user db.User) *pb.User {
	return &pb.User{
		Username: user.Username,
		Email:    user.Email,
		Password: user.Password,
	}
}
