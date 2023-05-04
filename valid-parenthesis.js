/* 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/
/*This is a stack, wich means there is a control of the order of the elements coming inside the stack, in order to make sure
* non of the close parenthesis comes after another*/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let stack = []
    let closeOpen = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (let c of s) {
        if (c in closeOpen) {
            if (stack.length > 0 && stack[stack.length - 1] === closeOpen[c]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(c)
        }
    }

    return stack.length === 0;
};

console.log(isValid("()"))