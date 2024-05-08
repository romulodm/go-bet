package server

import (
	"context"
	"database/sql"
	"strings"
	"time"

	db "github.com/romulodm/go-bet/auth/database/sqlc"
	"github.com/romulodm/go-bet/auth/errs"
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

	language := strings.ToLower(req.GetLanguage())
	if language == "" {
		language = errs.DEFAULT_LANGUAGE
	}

	hashedPassword, err := utils.HashePassword(req.GetPassword())
	if err != nil {
		return nil, status.Errorf(codes.Internal, errs.GetErrorMessage(language, "REGISTER_HASH_FAILED"))
	}

	arg := db.CreateUserParams{
		Username:  req.GetUsername(),
		Password:  hashedPassword,
		Email:     req.GetEmail(),
		CreatedAt: sql.NullTime{Time: time.Now(), Valid: true},
	}

	createdUser, err := server.store.CreateUser(ctx, arg)
	if err != nil {
		if strings.Contains(err.Error(), "users_username_key") {
			return nil, uniqueViolationError(errs.GetErrorMessage(language, "REGISTER_USERNAME_ALREADY_EXISTS"), "username")
		}

		if strings.Contains(err.Error(), "users_email_key") {
			return nil, uniqueViolationError(errs.GetErrorMessage(language, "REGISTER_EMAIL_ALREADY_EXISTS"), "email")
		}

		return nil, status.Errorf(codes.Internal, errs.GetErrorMessage(language, "REGISTER_INTERNAL_ERROR_SQL"))
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
