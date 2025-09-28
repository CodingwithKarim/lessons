# Lesson 07 — Singleton Design Pattern

This lesson demonstrates the **Singleton design pattern** in C++, showing how to enforce a single instance of a class across a program.

---

## 🔹 What You'll Learn
- How to implement a **basic singleton** with a static instance pointer  
- How to create a **singleton logger** that writes messages to a file  
- Why constructors are private and copy operations are deleted in singletons  

---

## ▶️ Run the Code

Compile and run the examples with `g++` or other c++ compiler:

```bash
# Compile and run Basic Singleton
g++ basic-singleton.cpp -o basic-singleton
./basic-singleton

# Compile and run Logger Singleton
g++ logger.cpp -o logger
./logger
```

---

## 📁 Files
- `basic-singleton.cpp` — Shows a minimal singleton returning the same instance every call  
- `logger.cpp` — Singleton logger class writing `DEBUG`, `INFO`, and `ERROR` messages to `log.txt`  

---

## 🧠 Quick Concepts
| Concept                  | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| Singleton                 | Ensures only one object of a class exists                         |
| Private constructor       | Prevents creating objects directly                                |
| Static instance           | Shared pointer/reference to the single object                     |
| `getInstance()`           | Global access point to the singleton                              |
| Logger singleton example  | Extends the pattern to write logs consistently to a single file   |
