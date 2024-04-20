package server

import (
	"context"
	"database/sql"
	"fmt"
	"strings"
	"time"

	db "github.com/romulodm/go-bet/auth/database/sqlc"
	"github.com/romulodm/go-bet/auth/pb/github.com/romulodm/gobet/auth/pb"
	"github.com/romulodm/go-bet/auth/utils"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) Register(ctx context.Context, req *pb.RegisterRequest) (*pb.RegisterResponse, error) {
	violations := validateCreateUserRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	hashedPassword, err := utils.HashePassword(req.GetPassword())
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to hash password: %s", err)
	}

	fmt.Println(hashedPassword)

	arg := db.CreateUserParams{
		Username:  req.GetUsername(),
		Password:  hashedPassword,
		Email:     req.GetEmail(),
		CreatedAt: sql.NullTime{Time: time.Now(), Valid: true},
	}

	createdUser, err := server.store.CreateUser(ctx, arg)
	if err != nil {
		if strings.Contains(err.Error(), "violates unique constraint") {
			return nil, status.Errorf(codes.AlreadyExists, "violação única de chave")
		}

		return nil, status.Errorf(codes.Internal, "internal error on sql query")
	}

	rsp := &pb.RegisterResponse{
		User:  convertUser(createdUser),
		Error: false,
	}

	return rsp, nil
}

func validateCreateUserRequest(req *pb.RegisterRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	if err := utils.ValidateUsername(req.GetUsername()); err != nil {
		violations = append(violations, fieldViolation("username", err))
	}

	if err := utils.ValidateEmail(req.GetEmail()); err != nil {
		violations = append(violations, fieldViolation("email", err))
	}

	if err := utils.ValidatePassword(req.GetPassword()); err != nil {
		violations = append(violations, fieldViolation("password", err))
	}

	return violations
}
