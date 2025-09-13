# Lesson 06 -- Sync vs Async in Python (with asyncio)

This lesson explores how synchronous and asynchronous execution differ in Python. You’ll see how tasks behave when run sequentially vs concurrently, and how async I/O can make network-bound programs much faster.

---

## 🔹 What You'll Learn

-   The difference between **synchronous (blocking)** and **asynchronous (non-blocking)** execution in python
-   How `time.sleep` vs `asyncio.sleep` affect program flow  
-   How to use `asyncio.gather` to run multiple coroutines concurrently  
-   How async I/O with `aiohttp` compares to traditional `requests` for real-world HTTP calls  
-   Why async is great for I/O-bound tasks but not for CPU-bound workloads  

---

## ▶️ Run the Code

From the lesson folder, navigate to target lesson:

```bash
# Navigate to lesson directory
cd /lessons/06-python-asyncio

# Install project dependencies defined in requirements.txt
pip install -r requirements.txt

# Run synchronous example
python sync.py

# Run asynchronous example
python async.py

# Run practical HTTP example showing upside of using async requests 
python index.py
```

---

## 📁 Files

-   `sync.py` — Demonstrates blocking tasks with `time.sleep` (≈6s total runtime)  
-   `async.py` — Runs the same tasks concurrently using `asyncio.gather` (≈3s total runtime)  
-   `index.py` — Compares synchronous `requests` with async `aiohttp` for multiple HTTP calls  

---

## 🧠 Quick Concepts

| Concept          | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Synchronous**  | Tasks run **one after another**, each blocking the next                     |
| **Asynchronous** | Tasks can run **concurrently** during waits (I/O, sleep)                    |
| `time.sleep`     | Blocks the entire program during wait                                       |
| `asyncio.sleep`  | Yields control so other coroutines can run                                  |
| `asyncio.gather` | Runs multiple async tasks concurrently and waits for all                    |
| Real-world I/O   | Async HTTP can send multiple requests at once, reducing total runtime       |


---

## 📌 Example Code Highlights

```python
# sync.py
def task(name, duration):
    print(f"Task {name} started")
    time.sleep(duration)
    print(f"Task {name} finished after {duration} seconds")
```

```python
# async.py
async def task(name, duration):
    print(f"Task {name} started")
    await asyncio.sleep(duration)
    print(f"Task {name} finished after {duration} seconds")
```

```python
# index.py
async with aiohttp.ClientSession() as session:
    tasks = [fetch_one(session, URL, sem) for _ in range(REQUEST_COUNT)]
    await asyncio.gather(*tasks)
```

---
