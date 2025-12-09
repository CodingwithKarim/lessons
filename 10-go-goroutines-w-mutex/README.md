# Lesson 10 - Goroutines, WaitGroups, and Mutexes in Go

This lesson demonstrates how to safely perform concurrent HTTP requests in Go using goroutines, a WaitGroup, and a mutex to protect shared data.

## What You'll Learn

-   How to start concurrent tasks using goroutines
-   How sync.WaitGroup ensures all goroutines finish before continuing
-   How sync.Mutex prevents map write conflicts
-   How to fetch multiple API endpoints safely and print results

## Run the Code

### 1. Start a local JSON server

Use any lightweight mock server (e.g. [JSON Server](https://github.com/typicode/json-server) or [HSON Server](https://github.com/CodingWithKarim/hson-server)) and use data.json file in the project directory as target data file.

### 2. Run the Go program

``` bash
go run main.go
```

Expected output prints the key/value pairs fetched from each endpoint.

## Files

-   **main.go** --- Go program using goroutines, WaitGroup, and a mutex
    to fetch three URLs concurrently and safely store results.
-   **data.json** --- Mock API data containing singers, cars, and drinks
    collections. Used as the source for HTTP requests.

## Quick Concepts

-   **Goroutine** --- Lightweight thread managed by Go; used to run
    tasks concurrently.
-   **WaitGroup** --- Allows the main goroutine to wait until all worker
    goroutines finish.
-   **Mutex** --- Ensures only one goroutine writes to shared data at a
    time (prevents race conditions).
-   **Shared State** --- `apiData` is a global map---writes must be
    synchronized.

## How the Program Works (High-Level)

1.  `main.go` starts three goroutines calling `fetch()` with different
    URLs.
2.  A **WaitGroup** ensures the program waits until all fetches
    complete.
3.  Each goroutine makes an HTTP GET request, reads the body, and writes
    results into `apiData`.
4.  A **mutex lock** ensures only one goroutine writes to the map at any
    moment.
5.  After all goroutines finish, the program prints the collected
    results.
