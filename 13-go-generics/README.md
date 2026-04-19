# Lesson 13 — Generics in Go

This lesson introduces **generics in Go**, focusing on how to use **type parameters** and **constraints** to write reusable, type-safe functions.

---

## 🔹 What You’ll Learn
- What generics are in Go  
- How to define a **type constraint** using interfaces  
- How to write a **generic function**  
- How Go enforces type safety across multiple numeric types  

---

## ▶️ Run the Code

```bash
go run main.go
```

---

## Files
| File | Description |
|------|------------|
| `main.go` | Demonstrates a generic function that works across multiple numeric types using a custom constraint. |

---

## Type Constraints

Go uses **interfaces as type constraints** for generics.

```go
type Number interface {
    int32 | int64 | float32 | float64
}
```

### Key Idea
- The `Number` interface defines a **set of allowed types**
- Only types listed in the constraint can be used with the generic function

---

## Generic Function Example

```go
func multiply[T Number](num T) T {
    return num * 2
}
```

### How It Works
- `T` is a **type parameter**
- `T Number` means: *T must satisfy the Number constraint*
- The function works for any type in the constraint

---

## Usage Example

```go
var num int32 = 2
var num2 int64 = 3
var num3 float32 = 4.0
var num4 float64 = 5.0

result1 := multiply(num)
result2 := multiply(num2)
result3 := multiply(num3)
result4 := multiply(num4)

fmt.Println(result1, result2, result3, result4)
```

### Output
```
4 6 8 10
```

---

## Key Characteristics

- **Type-safe**: Only allowed types can be used  
- **Reusable**: One function works across multiple types  
- **No casting needed**: Go infers the type automatically  

---

## Quick Concepts

| Concept | Description |
|--------|-------------|
| **Generics** | Allows functions and types to operate on multiple types safely |
| **Type Parameter (`T`)** | A placeholder for a type |
| **Constraint** | Defines which types are allowed |
| **Union (`|`)** | Combines multiple types into a constraint |

---

## When to Use Generics

| Use Case | Why |
|--------|-----|
| Reusable math functions | Avoid duplicate logic per type |
| Data structures (lists, maps) | Support multiple data types |
| Utility libraries | Write flexible, type-safe helpers |

---

## Summary

This example demonstrates how Go generics enable writing **clean, reusable, and type-safe functions**. By defining a constraint like `Number`, you ensure your function works only with valid types while still remaining flexible.
