package config

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/joho/godotenv"
)

type Config struct {
	DBDriver   string
	DBHost     string
	DBPort     string
	DBUser     string
	DBPassword string
	DBName     string
}

func LoadConfig() (config Config, err error) {
	absPath, err := filepath.Abs("./app.env")
	if err != nil {
		return config, fmt.Errorf("error on absolute path: %v", err)
	}

	err = godotenv.Load(absPath)
	if err != nil {
		return config, fmt.Errorf("error on load enviroment variables: %v", err)
	}

	config.DBDriver = os.Getenv("DB_DRIVER")
	config.DBHost = os.Getenv("DB_HOST")
	config.DBPort = os.Getenv("DB_PORT")
	config.DBUser = os.Getenv("DB_USER")
	config.DBPassword = os.Getenv("DB_PASSWORD")
	config.DBName = os.Getenv("DB_NAME")

	return config, nil
}

func (cfg Config) GetDatabaseURL() string {
	return fmt.Sprintf("%s://%s:%s@%s:%s/%s?sslmode=disable",
		cfg.DBDriver, cfg.DBUser, cfg.DBPassword, cfg.DBHost, cfg.DBPort, cfg.DBName)
}
