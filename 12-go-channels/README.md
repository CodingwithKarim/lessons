# Lesson 12 — Buffered vs Unbuffered Channels (Go)

This lesson introduces **channels in Go**, focusing on the behavioral differences between **buffered** and **unbuffered** channels and how they affect **goroutine synchronization**, **blocking**, and **deadlocks**.

---

## 🔹 What You’ll Learn
- What channels are and how they enable goroutine communication  
- The difference between **buffered** and **unbuffered** channels  
- When sends and receives **block**  
- How improper channel usage can cause **deadlocks**  

---

## ▶️ Run the Code

Run each example independently using `go run`:

```bash
# Buffered channel example
cd buffered
go run buffered.go

# Unbuffered channel example
cd unbuffered
go run unbuffered.go
```

---

## Files
| File | Description |
|------|------------|
| `buffered.go` | Demonstrates a **buffered channel** where sends do not immediately block. |
| `unbuffered.go` | Demonstrates an **unbuffered channel**, including a safe goroutine example and a deadlock scenario. |

---

## Buffered Channels

Buffered channels allow a fixed number of values to be stored **without requiring an immediate receiver**.

```go
c := make(chan int, 2)

c <- 10
c <- 20

num := <-c
num2 := <-c

fmt.Println(num, num2)
```

### Key Characteristics
- Sends **do not block** until the buffer is full  
- Receives **do not block** until the buffer is empty  
- Useful for **decoupling producers and consumers**

---

## Unbuffered Channels

Unbuffered channels require **both sender and receiver to be ready at the same time**.

```go
c := make(chan int)

go func() {
    fmt.Println(<-c)
}()

c <- 10
```

### Key Characteristics
- Sends **block** until another goroutine receives  
- Enforces strict synchronization  
- Ideal when you want guaranteed handoff between goroutines  

---

## Deadlock Example

If a send occurs without a corresponding receiver, the program will **deadlock**:

```go
func deadlockExample() {
    c := make(chan int)

    c <- 10 // blocks forever

    num := <-c
    fmt.Println(num)
}
```

This happens because:
- There is **only one goroutine**
- The send waits forever for a receiver that never exists

---

## Quick Concepts

| Concept | Description |
|-------|-------------|
| **Channel** | A typed conduit for sending and receiving values between goroutines. |
| **Buffered Channel** | Allows a limited number of sends without blocking. |
| **Unbuffered Channel** | Requires sender and receiver to synchronize directly. |
| **Blocking** | When a goroutine waits until a channel operation can proceed. |
| **Deadlock** | Program state where all goroutines are blocked indefinitely. |

---

## When to Use Which?

| Use Case | Channel Type |
|--------|--------------|
| Strict synchronization | Unbuffered |
| Task queues / pipelines | Buffered |
| Backpressure control | Buffered |
| Simple handoff signaling | Unbuffered |
