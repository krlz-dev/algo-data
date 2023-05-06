package main

import (
	"fmt"
)

func isValid(s string) bool {
	stack := []rune{}
	closeOpen := map[rune]rune{
		')': '(',
		']': '[',
		'}': '{',
	}
	println("hey")
	for _, c := range s {
		if val, ok := closeOpen[c]; ok {
			if len(stack) > 0 && stack[len(stack)-1] == val {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		} else {
			stack = append(stack, c)
		}
	}

	return len(stack) == 0
}

func main() {
	fmt.Println(isValid("({[]})"))    // true
	fmt.Println(isValid("({[}])"))    // false
	fmt.Println(isValid("({[}]"))     // false
	fmt.Println(isValid("{{[()]}}"))  // true
	fmt.Println(isValid("{{[()}}}}")) // false
}
