package utils

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

func HashePassword(password string) (string, error) {
	hashePassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("failed to hash password: %w", err)
	}

	return string(hashePassword), nil
}

func CheckPassword(passwordToCompare string, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(passwordToCompare))
}
