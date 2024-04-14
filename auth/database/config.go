package db

import (
	"errors"
	"fmt"
	"os"
)

type DatabaseConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	Name     string
}

func NewServer() DatabaseConfig {
	return DatabaseConfig{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASSWORD"),
		Name:     os.Getenv("DB_NAME"),
	}
}

func (db DatabaseConfig) Validate() error {
	if db.Host == "" {
		return errors.New("missing DB_HOST")
	}

	if db.Port == "" {
		return errors.New("missing DB_PORT")
	}

	if db.User == "" {
		return errors.New("missing DB_USER")
	}

	if db.Password == "" {
		return errors.New("missing DB_PASSWORD")
	}

	if db.Name == "" {
		return errors.New("missing DB_NAME")
	}

	return nil
}

func (db DatabaseConfig) getConnectionString() string {
	return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s timezone=%s connect_timeout=5",
		db.Host, db.Port, db.User, db.Password, db.Name)
}
