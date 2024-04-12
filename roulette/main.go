package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"gitbuh.com/romulodm/go-bet/roulette/service"
)

var addr = flag.String("addr", ":8080", "http service address")

func main() {
	flag.Parse()

	http.HandleFunc("/join-room", func(w http.ResponseWriter, r *http.Request) {
		service.JoinRoom(w, r)
	})

	server := &http.Server{
		Addr: *addr,
	}

	err := server.ListenAndServe()
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

	fmt.Println("Server running!")
}
