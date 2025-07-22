# 📘 Lesson 03 – Async and Await in Javascript / Typescript

This lesson explores how `async` functions work in Javascript / Typescript, how they automatically return Promises, and how to consume real world like API data asynchronously using `await` with `fetch()` + JSON Server or HSON Server.

---

## 🔹 What You'll Learn

- How the `async` keyword transforms functions to return always return Promises
- How to use `await` to pause execution inside async functions in a non blocking manner
- How to fetch data from an API using `fetch()` and how to deal with the promise it returns with async + await

---

## ▶️ Run the Code

Make sure you have Deno or Ts-Node installed. 

From the lesson folder, run:

```bash
cd 03-javascript-async-await
deno basics.ts
deno index.ts
```

### 🧪 Setup a Mock API (Optional)

You can use any mock server to simulate backend API. We are using HSON-Server but JSON-Server can also be used.
```bash
C:\code\hson-server>.\main --db=/code/lessons/03-javascript-async-await/index.hson --live-reload --verbose --log-level=Info
```

---

## 📁 Files

- `basics.ts` — Demonstrates `async/await` basics
- `index.ts` — Demonstrates real world example of using `async/await` by making a network request to fetch data
- `index.hson` — .txt file I am using to mock data with HSON-Server


---

## 🧠 Quick Concepts

| Concept                | Description                                                                              |
|------------------------|------------------------------------------------------------------------------------------|
| `async function`       | Always returns a Promise, even if returning a literal value like a string                |
| `await` keyword        | Pauses execution inside async function until Promise is resolved                         |
| `fetch()` API          | Returns `Promise<Response>` and use `.json()` to get parsed JSON (returns Promise<any>)  |

---

## 📌 Example Code Highlights

```ts
// Simple async function that resolves to a string. Async keyword auto makes this return a Promise
async function helloWorld(): Promise<string> {
    return "Hello World!";
}

// Await the hello world promise and log the message. Using await waits until promise resolves
async function App() {
   const msg = await helloWorld();

   console.log(msg)
}
```

---
