package server

import (
	"context"
	"errors"

	db "github.com/romulodm/go-bet/auth/database/sqlc"
	"github.com/romulodm/go-bet/auth/pb/github.com/romulodm/gobet/auth/pb"
	"github.com/romulodm/go-bet/auth/utils"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) Login(ctx context.Context, req *pb.LoginRequest) (*pb.LoginResponse, error) {
	violations := validateLoginRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	user, err := server.store.GetUserByEmail(ctx, req.GetEmail())
	if err != nil {
		if errors.Is(err, db.ErrNotFound) {
			return nil, status.Errorf(codes.NotFound, "user not found")
		}
		return nil, status.Errorf(codes.Internal, "failed on server")
	}

	err = utils.CheckPassword(req.Password, user.Password)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "incorrect password")
	}

	accessToken, err := server.tokenManager.Generate(
		user.Username,
		int(user.ID),
		server.config.JWTAccessTokenExpiry,
	)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create token")
	}

	refreshToken, err := server.tokenManager.Generate(
		user.Username,
		int(user.ID),
		server.config.JWTRefreshTokenExpiry,
	)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create refresh token")
	}

	rsp := &pb.LoginResponse{
		User:         convertUser(user),
		Token:        accessToken,
		RefreshToken: refreshToken,
	}

	return rsp, nil

}

func validateLoginRequest(req *pb.LoginRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	if err := utils.ValidateEmail(req.GetEmail()); err != nil {
		violations = append(violations, fieldViolation("email", err))
	}

	if err := utils.ValidatePassword(req.GetPassword()); err != nil {
		violations = append(violations, fieldViolation("password", err))
	}

	return violations
}
