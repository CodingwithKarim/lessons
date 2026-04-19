# Lesson 14 — Select Statement & Timeouts in Go

This lesson introduces the **`select` statement in Go**, focusing on how it enables **concurrent channel handling**, **non-deterministic execution**, and **timeouts**.

---

## 🔹 What You’ll Learn
- How the `select` statement works  
- How to listen to **multiple channels simultaneously**  
- How to implement **timeouts using `time.After`**  
- How to manage concurrent job execution safely  

---

## ▶️ Run the Code

```bash
go run main.go
```

---

## Files
| File | Description |
|------|------------|
| `main.go` | Demonstrates `select` with multiple channels and a real-world timeout pattern for concurrent jobs. |

---

## Basic Select Example

```go
select {
case msg1 := <-c1:
    fmt.Println(msg1)
case msg2 := <-c2:
    fmt.Println(msg2)
}
```

### How It Works
- Waits on **multiple channel operations**
- Executes **whichever case is ready first**
- If multiple are ready, one is chosen **randomly**

### Key Characteristics
- Prevents blocking on a single channel  
- Enables **fan-in patterns** (multiple inputs → one consumer)  
- Core tool for concurrent coordination  

---

## Infinite Select Loop

```go
for {
    select {
    case msg1 := <-c1:
        fmt.Println(msg1)
    case msg2 := <-c2:
        fmt.Println(msg2)
    }
}
```

### Behavior
- Continuously listens for incoming messages  
- Handles values as soon as they arrive  
- Common in **event loops** and **workers**

---

## Timeout Pattern with `time.After`

```go
select {
case <-done:
    fmt.Println("Job processed successfully")
case <-time.After(5 * time.Second):
    fmt.Println("Job timed out")
}
```

### How It Works
- `time.After` returns a channel that sends a value after a delay  
- Acts as a **deadline mechanism**  
- If the job takes too long → timeout triggers  

---

## Job Processing Example

```go
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
```

### Key Concepts
- Each job runs in its own **goroutine**  
- A `done` channel signals completion  
- `select` enforces a **maximum execution time**  

---

## Demo Example

```go
goodJob := func() {
    time.Sleep(time.Second)
}

badJob := func() {
    time.Sleep(6 * time.Second)
}
```

### Output Behavior
- `goodJob` → completes within 5 seconds  
- `badJob` → triggers timeout  

---

## Quick Concepts

| Concept | Description |
|--------|-------------|
| **select** | Waits on multiple channel operations |
| **Non-blocking behavior** | Handles whichever channel is ready |
| **time.After** | Creates a timeout channel |
| **Goroutine** | Lightweight concurrent function |
| **Timeout pattern** | Prevents long-running or stuck operations |

---

## When to Use Select

| Use Case | Why |
|--------|-----|
| Listening to multiple channels | Avoid blocking on one source |
| Timeouts / deadlines | Prevent hangs |
| Worker systems | Manage concurrent jobs |
| Event-driven systems | React to incoming signals |

---

## Summary

The `select` statement is a core primitive in Go concurrency. It allows you to **coordinate multiple channels**, implement **timeouts**, and build **robust concurrent systems** that avoid blocking and deadlocks.

By combining `select` with `time.After`, you gain fine-grained control over execution timing and system reliability.
