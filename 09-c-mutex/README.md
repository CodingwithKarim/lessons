# Lesson 09 — Mutex and Thread Safety

This lesson introduces **mutexes** in C++, demonstrating how multiple threads can safely access a **shared resource** like a counter or log file without data corruption.

---

## 🔹 What You'll Learn
- How to use `std::mutex` to synchronize threads  
- Why shared/global resources must be protected  
- How `std::thread` and `.join()` work together to manage concurrent execution  

---

## ▶️ Run the Code

Compile and run the example using `g++`:

```bash
# Compile
g++ basics.cpp -o basics
g++ index.cpp -o index

# Run the executable
./basics
./index
```

---

## 📁 Files
| File | Description |
|------|--------------|
| `basics.cpp` | Demonstrates using `std::mutex` to safely increment a shared counter between multiple threads. |
| `index.cpp`  | Practical example using log .txt file as shared resource. |

---

## 🧠 Quick Concepts
| Concept | Description |
|----------|-------------|
| **Thread Safety** | Ensures shared data isn’t corrupted when accessed by multiple threads. |
| **`std::mutex`** | Mutual exclusion lock — only one thread can enter the critical section at a time. |
| **`lock()` / `unlock()`** | Manual mutex control; must always unlock after locking. |
| **`join()`** | Ensures the main thread waits for worker threads to finish. |
