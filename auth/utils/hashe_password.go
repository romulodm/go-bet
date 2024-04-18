package utils

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

func hashePassword(password string) (string, error) {
	hashePassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("Failed to hash password:", err)
	}

	return string(hashePassword), nil
}

func checkPassword(passwordToCompare string, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(passwordToCompare))
}
