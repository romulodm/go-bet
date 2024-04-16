package db

import (
	"database/sql"
	"log"
	"os"
	"testing"

	_ "github.com/lib/pq"
)

var (
	DBDriver string
	DBSource string
)

func init() {
	DBDriver = "postgres"
	DBSource = os.Getenv("DB_HOST")
}

var testQueries *Queries

func TestMain(m *testing.M) {
	conn, err := sql.Open(DBDriver, DBSource)
	if err != nil {
		log.Fatal("Error to connect DB:", err)
	}

	testQueries = New(conn)
	os.Exit(m.Run())
}
