package main

import (
	"fmt"
	"time"
)

func main() {
	c := make(chan int)

	go func() {
		fmt.Println(<-c)
	}()

	c <- 10 // This send will block until another goroutine receives from the channel

	time.Sleep(1000 * time.Millisecond) // Give the goroutine time to print the value
}

// This func will cause a deadlock as we only have one active goroutine which will block on line 19 indefintely
func deadlockExample() {
	c := make(chan int)

	c <- 10

	num := <-c

	fmt.Println(num)
}
