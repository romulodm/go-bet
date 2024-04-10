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
	secretKey     []byte
	tokenDuration time.Duration
	keyFunc       func(token *jwt.Token) (interface{}, error)
}

func NewManager(secretKey []byte, tokenDuration time.Duration) *Manager {
	return &Manager{
		secretKey:     secretKey,
		tokenDuration: tokenDuration,
		keyFunc: func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		},
	}
}

func (m *Manager) Generate() (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"expiresAt": &jwt.NumericDate{Time: time.Now().Add(m.tokenDuration)},
	})

	return token.SignedString(m.secretKey)
}

func (m *Manager) Verify(token string) error {
	var claims jwt.RegisteredClaims
	token, err := jwt.ParseWithClaims(
		token,
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
