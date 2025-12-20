package main

import (
	"fmt"
)

func main() {
	c := make(chan int, 2)

	c <- 10
	c <- 20

	// Since the channel is buffered, these sends do not block
	num := <-c
	num2 := <-c

	fmt.Println(num, num2)
}
