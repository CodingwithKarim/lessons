# 🔁 JavaScript: Synchronous vs Asynchronous Execution

This lesson demonstrates the difference between **blocking synchronous code** and **non-blocking asynchronous code** using `setTimeout`, `await`, and the concept of the **JavaScript event loop**.

You'll clearly see how blocking the main thread affects timers — and how `async/await` lets your code run smoothly without freezing the app.

---

## 📂 Folder Structure

```
01-sync-vs-async/
├── index.js       # Main demo file
├── helpers.js     # Logging, blocking, and async helpers
└── README.md      # You're here!
```

---

## 💡 Key Concepts

| Concept             | Synchronous (Blocking)              | Asynchronous (Non-Blocking)         |
|---------------------|-------------------------------------|--------------------------------------|
| Execution           | One task at a time                  | Can pause and resume                 |
| Main thread         | ❌ Blocked by long tasks             | ✅ Free to handle other events       |
| Event loop behavior | ❌ Can't dispatch while blocked      | ✅ Continues processing other tasks  |
| `setTimeout`        | Delayed if blocked                  | Fires on time                        |

---

## 🔍 What You'll Learn

- How the JavaScript **event loop** works
- The difference between **blocking the main thread** vs yielding it
- Why `setTimeout` can be delayed by synchronous code
- How `async/await` keeps the app responsive

---

## 🚀 How to Run

1. Clone or download this repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/lessons.git
   cd lessons/01-sync-vs-async
   ```

2. Run the file with Node.js:
   ```bash
   node index.js
   ```

3. Toggle the demo in `index.js`:
   ```js
   AppBlocking();      // 🔴 Blocks the main thread
   // AppNonBlocking(); // 🟢 Frees main thread using async/await
   ```

---

## 🧪 Sample Output

**Blocking:**
```
[16:04:01] 🔴 [Blocking] App started
[16:04:06] 🔴 [Blocking] App finished with value of "Done blocking for 5 seconds."
[16:04:06] [Blocking] setTimeout fired after 1 second
```

**Non-blocking:**
```
[16:04:01] 🟢 [Non-blocking] App started
[16:04:02] [Non-blocking] setTimeout fired after 1 second
[16:04:06] 🟢 [Non-blocking] App finished with value of "Done sleeping asynchronously for 5 seconds."
```

---

## 📽️ Related Video / Blog

- 📺 YouTube (coming soon)
- 📖 Learn more: [MDN - JavaScript Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

---

## 🧵 TL;DR

> **Synchronous code blocks the main thread**, delaying everything else — even timers.  
> **Asynchronous code using `await` lets the event loop keep running**, so your app stays responsive.

---
