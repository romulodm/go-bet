-- name: GetUserById :one
SELECT * FROM users
WHERE id = $1 LIMIT 1;

-- name: GetUserByUsername :one
SELECT * FROM users
WHERE username = $1 LIMIT 1;

-- name: GetUserByEmail :one
SELECT * FROM users
WHERE email = $1 LIMIT 1;

-- name: CreateUser :one
INSERT INTO users (
  username, email, password, created_at
) VALUES (
  $1, $2, $3, $4
)
RETURNING *;

-- name: UpdateUserByUsername :exec
UPDATE users
  set email = $2,
  password = $3
WHERE username = $1;