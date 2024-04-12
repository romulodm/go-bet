package service

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  4096,
	WriteBufferSize: 4096,
}

type RouletteGameRoom struct {
	clients    map[*Client]bool
	register   chan *Client
	unregister chan *Client
	broadcast  chan *Message
}

var rouletteRoom *RouletteGameRoom

func init() {
	rouletteRoom = NewRouletteRoom()
	go rouletteRoom.RunRoom()
}

func NewRouletteRoom() *RouletteGameRoom {
	/*
		NewRouletteRoom creates a new Room.
		Returns:

		- *RouletteGameRoom: The newly created Room.
	*/

	return &RouletteGameRoom{
		clients:    make(map[*Client]bool),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		broadcast:  make(chan *Message),
	}
}

func (room *RouletteGameRoom) RunRoom() {
	/*
		RunRoom runs the room's main loop, which listens for client registration, unregistration, and message broadcasting.
	*/

	for {
		select {

		case client := <-room.register:
			room.registerClientInRoom(client)

		case client := <-room.unregister:
			room.unregisterClientInRoom(client)

		case message := <-room.broadcast:
			room.broadcastToClientsInRoom(message.encode())
		}
	}
}

func (room *RouletteGameRoom) registerClientInRoom(client *Client) bool {
	/*
		Parameters:
		- client (*Client): The client to register.
	*/

	room.clients[client] = true
	room.notifyClientJoined(client)
	return true
}

func (room *RouletteGameRoom) unregisterClientInRoom(client *Client) {
	/*
		unregisterClientInRoom removes a client from the room.

		Parameters:
		- client (*Client): The client to unregister.
	*/

	if _, ok := room.clients[client]; ok {
		delete(room.clients, client)
		room.notifyClientLeave(client)
	}
}

func (room *RouletteGameRoom) notifyClientJoined(client *Client) {
	/*
		notifyClientJoined notifies all clients in the room that a new client has joined.

		Parameters:
		- client (*Client): The client that joined the room.
	*/

	message := &Message{
		Action:  JoinRoomSuccessfully,
		Message: client.getUsername(),
	}

	room.broadcastToClientsInRoom(message.encode())
}

func (room *RouletteGameRoom) notifyClientLeave(client *Client) {
	/*
		notifyClientLeave notifies all clients in the room that a new client has left.

		Parameters:
		- client (*Client): The client that left the room.
	*/

	message := &Message{
		Action:  LeaveRoomSuccessfully,
		Message: client.getUsername(),
	}

	room.broadcastToClientsInRoom(message.encode())
}

func (room *RouletteGameRoom) broadcastToClientsInRoom(message []byte) {
	/*
		broadcastToClientsInRoom sends a message to all clients in the room.

		Parameters:
		- message ([]byte): The message to broadcast.
	*/

	for client := range room.clients {
		client.send <- message
	}
}

func JoinRoom(w http.ResponseWriter, r *http.Request) {
	username := r.URL.Query().Get("user")

	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}

	client := NewClient(conn, username, rouletteRoom)

	go client.writePump()
	go client.readPump()

	rouletteRoom.registerClientInRoom(client)

	message := Message{
		Action:  "ENTERED_ON_ROOM_SUCCESSFULY",
		Message: username,
		Sender:  client,
	}

	jsonMessage, err := json.Marshal(message)
	if err != nil {
		fmt.Println("Error to convert to JSON:", err)
		return
	}

	client.send <- jsonMessage

}
