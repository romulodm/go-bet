package service

import (
	"encoding/json"
	"log"
	"time"
)

var (
	JoinRoomSuccessfully  = "TOALL_USER_JOINED_ROOM"
	LeaveRoomSuccessfully = "TOALL_USER_LEAVE_ROOM"
	UserJoined            = "JOINED_SUCCESSFULY"
	UserLeft              = "LEFT_SUCCESSFULY"
	NewBetMaded           = "BET_MESSAGE"
)

type Message struct {
	Action    string    `json:"action"`
	Message   string    `json:"message"`
	Sender    *Client   `json:"sender"`
	Timestamp time.Time `json:"timestamp"`
}

func (message *Message) encode() []byte {
	json, err := json.Marshal(message)
	if err != nil {
		log.Println(err)
	}

	return json
}

func InternalError() []byte {
	data, _ := json.Marshal(Message{
		Action:  "Error",
		Message: "Internal server error",
	})
	return data
}
