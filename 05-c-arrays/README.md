# 📘 Lesson 05 -- Arrays, Memory, and Structs in C++

This lesson explores how arrays work in C++, how elements are stored in
continuos memory, and how pointer arithmetic is used to access values stored in an array. 

------------------------------------------------------------------------

## 🔹 What You'll Learn

-   How C++ arrays store elements in contiguous memory locations
-   How to dereference an array name (decay into a pointer) to access
    the first element
-   How to use `sizeof` to measure the memory footprint of elements & arrays
-   How to print element addresses to visualize memory layout

------------------------------------------------------------------------

## ▶️ Run the Code

Make sure you have a C++ compiler like `g++` installed.

From the lesson folder, compile and run:

``` bash
# Navigate to lesson directory
cd /lessons/05-c-arrays

# Compile code
g++ basics.cpp -o basics
g++ main.cpp -o main

# Run the .exe
./basics
./main
```

------------------------------------------------------------------------

## 📁 Files

-   `basics.cpp` --- Demonstrates array basics, dereferencing, and
    pointer decay (`*(numbers)` → `numbers[0]`)
-   `main.cpp` --- Demonstrates memory usage of a struct in an array
    and prints addresses of each element

------------------------------------------------------------------------

## 🧠 Quick Concepts

  --------------------------------------------------------------------------
  Concept              Description
  -------------------- -----------------------------------------------------
  Array name decay     An array variable like `numbers` decays into a
                       pointer to its first element

  `*(numbers)`         Equivalent to `numbers[0]`

  `sizeof(array)`      Gives the total memory allocated for the array

  `sizeof(array[0])`   Memory occupied by one element in the array

  Struct array memory  Each struct element occupies `sizeof(struct)` bytes
                       in contiguous memory
  --------------------------------------------------------------------------

------------------------------------------------------------------------

## 📌 Example Code Highlights

``` cpp
int numbers[5] = {5,6,7,8,9};

// Array name decays into pointer → *(numbers) gives first element
std::cout << *(numbers); // prints 5
```

``` cpp
struct Block {
    int a = 10;
    int c = 20;
    int d = 30;
};

Block array[10];

printf("Each element occupies %zu bytes\n", sizeof(array[0]));
printf("Array allocated %zu total bytes\n", sizeof(array));

for (int i = 0; i < 10; i++) {
    printf("array[%d] is located at address %p\n", i, (void*)(array + i));
}
```
