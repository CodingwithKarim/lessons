package main

import (
	"fmt"
	"time"
)

func main() {
	// First Example: Basic select with two channels
	basicSelectExample()

	// Second Example: More practical
	demoTimeout()
}

func basicSelectExample() {
	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		time.Sleep(1 * time.Second)
		c1 <- "from channel 1"
	}()

	go func() {
		time.Sleep(2 * time.Second)
		c2 <- "from channel 2"
	}()

	for {
		select {
		case msg1 := <-c1:
			fmt.Println(msg1)
		case msg2 := <-c2:
			fmt.Println(msg2)
		}
	}
}

func runJobs(jobsChan chan func()) {
	for job := range jobsChan {
		done := make(chan struct{})
		go func() {
			job()
			close(done)
		}()

		select {
		case <-done:
			fmt.Println("Job processed successfully")
		case <-time.After(5 * time.Second):
			fmt.Println("Job timed out")
			return
		}
	}
}

func demoTimeout() {
	jobsChan := make(chan func())

	go func() {
		runJobs(jobsChan)
	}()

	goodJob := func() {
		time.Sleep(time.Second)
	}

	badJob := func() {
		time.Sleep(6 * time.Second)
	}

	jobsChan <- goodJob
	jobsChan <- badJob
	close(jobsChan)

	time.Sleep(7 * time.Second)
}
