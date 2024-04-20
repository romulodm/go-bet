package jwt

import (
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

var (
	UnauthorizedError = errors.New("Unauthorized.")
	InvalidTokenError = errors.New("Invalid token.")
	TokenExpiredError = errors.New("Token expired.")
)

type Manager struct {
	secretKey []byte
	keyFunc   func(token *jwt.Token) (interface{}, error)
}

func NewManager(secretKey []byte) *Manager {
	return &Manager{
		secretKey: secretKey,
		keyFunc: func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		},
	}
}

func (m *Manager) Generate(username string, userId int, duration time.Duration) (string, error) {
	payload, err := NewPayload(username, userId, duration)
	if err != nil {
		return "", err
	}

	tokenJwt := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)
	token, err := tokenJwt.SignedString([]byte(m.secretKey))

	return token, err
}

func (m *Manager) Verify(tokenReceived string) error {
	var claims jwt.RegisteredClaims
	token, err := jwt.ParseWithClaims(
		tokenReceived,
		&claims,
		m.keyFunc,
		jwt.WithValidMethods([]string{"HS256"}),
		jwt.WithoutClaimsValidation())

	switch {
	case err != nil:
		return UnauthorizedError
	case !token.Valid:
		return InvalidTokenError
	case !claims.VerifyExpiresAt(time.Now(), false):
		return TokenExpiredError
	default:
		return nil
	}
}
