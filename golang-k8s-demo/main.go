package main

import (
	"encoding/json"
	"log"
	"net"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

const (
	port string = ":1234"
)

// HostInfo struct
type HostInfo struct {
	IP       string `json:"ip"`
	Hostname string `json:"hostname"`
}

func main() {
	router := mux.NewRouter()
	hi := HostInfo{}

	router.HandleFunc("/v1/api/golang/k8s", hi.hostInfo).Methods(http.MethodGet)

	log.Fatal(http.ListenAndServe(port, router))
}

func (hi *HostInfo) hostInfo(w http.ResponseWriter, r *http.Request) {

	// GHETO STYLE...
	hi.Hostname, _ = os.Hostname()

	addrs, _ := net.LookupIP(hi.Hostname)
	for _, addr := range addrs {
		if ip4 := addr.To4(); ip4 != nil {
			hi.IP = ip4.String()
		}
	}

	response, _ := json.Marshal(hi)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	w.Write(response)
}
