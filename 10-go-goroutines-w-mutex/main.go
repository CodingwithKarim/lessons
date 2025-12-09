package main

import (
	"fmt"
	"io"
	"net/http"
	"sync"
)

var apiData = make(map[string]string, 3)
var wg = &sync.WaitGroup{}
var mutex = &sync.Mutex{}

func main() {
	wg.Add(3)

	go fetch("http://localhost:3000/singers")
	go fetch("http://localhost:3000/cars")
	go fetch("http://localhost:3000/drinks")

	wg.Wait()

	for key, value := range apiData {
		fmt.Printf("Key: %s, Value: %s\n", key, value)
	}
}

func fetch(url string) {
	defer wg.Done()

	response, err := http.Get(url)

	if err != nil {
		panic(err)
	}

	defer response.Body.Close()

	body, err := io.ReadAll(response.Body)

	if err != nil {
		panic(err)
	}

	result := string(body)

	mutex.Lock()
	apiData[url] = result
	mutex.Unlock()
}
