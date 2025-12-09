package main

import (
	"fmt"
	"io"
	"net/http"
	"sync"
)

type data struct {
	key, value string
}

var apiData = make(map[string]string, 3)
var wg = &sync.WaitGroup{}
var c = make(chan data, 3)

func main() {
	wg.Add(3)

	go fetch("http://localhost:3000/singers")
	go fetch("http://localhost:3000/cars")
	go fetch("http://localhost:3000/drinks")

	go func() {
		wg.Wait()
		close(c)
	}()

	for result := range c {
		apiData[result.key] = result.value
	}

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

	c <- data{url, result}
}
