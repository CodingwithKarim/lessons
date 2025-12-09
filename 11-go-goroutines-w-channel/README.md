# Lesson 11 - Goroutines, WaitGroups, and Channels in Go

This lesson demonstrates how to safely perform concurrent HTTP requests
in Go using goroutines, a WaitGroup, and a **channel** to
communicate between goroutines and collect results without needing a
mutex.

## What You'll Learn

-   How to start concurrent tasks using goroutines
-   How `sync.WaitGroup` ensures all goroutines finish before
    continuing
-   How a **channel** allows goroutines to send results safely
-   How to fetch multiple API endpoints concurrently and aggregate
    results

## Run the Code

### 1. Start a local JSON server

Use any lightweight mock server (e.g. [JSON
Server](https://github.com/typicode/json-server) or [HSON
Server](https://github.com/CodingWithKarim/hson-server)) and use the
`data.json` file in the project directory as the target data file.

### 2. Run the Go program

``` bash
go run main.go
```

Expected output prints the key/value pairs fetched from each endpoint.

## Files

-   **main.go** - Go program using goroutines, a WaitGroup, and a
    **buffered channel** - to fetch three URLs concurrently and safely
    collect results.
-   **data.json** - Mock API data containing singers, cars, and drinks
    collections. Used as the source for HTTP requests.

## Quick Concepts

-   **Goroutine** - Lightweight thread managed by Go; used to run
    tasks concurrently.
-   **WaitGroup** - Allows the main goroutine to wait until all worker
    goroutines finish.
-   **Buffered Channel** - Allows goroutines to send data without
    blocking immediately, and ensures serialized result handling without
    a mutex.
-   **Shared State** - `apiData` is updated only by the main goroutine
    as it reads from the channel, removing the need for synchronization
    locks.

## How the Program Works (High-Level)
1.  `main.go` starts three goroutines calling `fetch()` with different
    URLs.
2.  A **WaitGroup** ensures the program waits until all fetches
    complete.
3.  Each goroutine makes an HTTP GET request, reads the body, and
    **sends the result through the channel**.
4.  Once all goroutines finish, the channel is closed, and the main
    goroutine **reads from the channel** and stores results in
    `apiData`.
5.  After processing all channel messages, the program prints the
    collected results.