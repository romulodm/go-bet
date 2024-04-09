package models

import (
	"fmt"
	"time"
)

type User struct {
	ID         int64      `json:"id"`
	Username   string     `json:"username"`
	Email      string     `json:"email"`
	Phone      string     `json:"phone"`
	Password   string     `json:"password"`
	Affiliated bool       `json:"affiliated"`
	CreatedAt  time.Time  `json:"created_at"`
	UpdatedAt  *time.Time `json:"updated_at"`
}

type UserBalance struct {
	UserID    int64      `json:"user_id"`
	Balance   float64    `json:"balance"`
	TotalBets float64    `json:"total_bets"`
	UpdatedAt *time.Time `json:"updated_at"`
}

type UserInfo struct {
	UserID    int64      `json:"user_id"`
	Birthdate time.Time  `json:"birthdate"`
	CPF       string     `json:"cpf"`
	Country   string     `json:"country"`
	UF        string     `json:"uf"`
	CEP       string     `json:"cep"`
	Address   string     `json:"address"`
	UpdatedAt *time.Time `json:"updated_at"`
}

type UserAffiliate struct {
	SponsorID   int64     `json:"sponsor_id"`
	AssociateID int64     `json:"associate_id"`
	CreatedAt   time.Time `json:"created_at"`
}

func (u *User) Validate() error {
	if u.Username == "" {
		return fmt.Errorf("Username is required.")
	}
	if u.Email == "" {
		return fmt.Errorf("Email is required.")
	}
	if u.Password == "" {
		return fmt.Errorf("Password is required.")
	}
	return nil
}
