package main

import "fmt"

type Number interface {
	int32 | int64 | float32 | float64
}

func main() {
	var num int32 = 2
	var num2 int64 = 3
	var num3 float32 = 4.0
	var num4 float64 = 5.0

	result1 := multiply(num)
	result2 := multiply(num2)
	result3 := multiply(num3)
	result4 := multiply(num4)

	fmt.Println(result1, result2, result3, result4)
}

func multiply[T Number](num T) T {
	return num * 2
}
