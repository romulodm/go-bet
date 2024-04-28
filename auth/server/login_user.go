package server

import (
	"context"
	"errors"
	"strings"

	db "github.com/romulodm/go-bet/auth/database/sqlc"
	"github.com/romulodm/go-bet/auth/errs"
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

	language := strings.ToLower(req.GetLanguage())
	if language == "" {
		language = errs.DEFAULT_LANGUAGE
	}

	user, err := server.store.GetUserByEmail(ctx, req.GetEmail())
	if err != nil {
		if errors.Is(err, db.ErrNotFound) {
			return nil, status.Errorf(codes.NotFound, errs.GetErrorMessage(language, "LOGIN_USER_NOT_FOUND"))
		}
		return nil, status.Errorf(codes.Internal, errs.GetErrorMessage(language, "LOGIN_INTERNAL_ERROR_SQL"))
	}

	err = utils.CheckPassword(req.Password, user.Password)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, errs.GetErrorMessage(language, "LOGIN_INCORRECT_PASSWORD"))
	}

	accessToken, err := server.tokenManager.Generate(
		user.Username,
		int(user.ID),
		server.config.JWTAccessTokenExpiry,
	)
	if err != nil {
		return nil, status.Errorf(codes.Internal, errs.GetErrorMessage(language, "LOGIN_TOKEN_FAILURE"))
	}

	refreshToken, err := server.tokenManager.Generate(
		user.Username,
		int(user.ID),
		server.config.JWTRefreshTokenExpiry,
	)
	if err != nil {
		return nil, status.Errorf(codes.Internal, errs.GetErrorMessage(language, "LOGIN_REFRESH_TOKEN_FAILURE"))
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
