# Lesson 08 — Dependency Injection

This lesson introduces **Dependency Injection (DI)** in C++, showing how to pass dependencies into classes instead of creating them internally.

---

## 🔹 What You'll Learn
- How to use **constructor injection** to supply dependencies
- How to make dependencies **non‑copyable** to avoid accidental duplication

---

## ▶️ Run the Code

Compile and run the examples with `g++`:

```bash
# Basics example
g++ basics.cpp -o basics && ./basics

# Authentication example
g++ main.cpp -o main && ./main
```

---

## 📁 Files
- `basics.cpp` — Simple DI with a `Logger` passed into a `Service`
- `main.cpp` — DI with `Logger` and `Database`, marked non‑copyable, injected into `AuthenticationService`

---

## 🧠 Quick Concepts
| Concept                   | Description                                                  |
|---------------------------|--------------------------------------------------------------|
| Dependency Injection      | Pass dependencies into a class instead of building inside    |
| Constructor Injection     | Supply required dependencies through the constructor         |
| Non‑copyable dependencies | Use `= delete` on copy/assignment to enforce safe ownership  |