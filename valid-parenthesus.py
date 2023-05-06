class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        close_open = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
    
        for c in s:
            if c in close_open:
                if stack and stack[-1] == close_open[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
    
        return len(stack) == 0
 
print(Solution().isValid("({[]})"))    # True
print(Solution().isValid("({[}])"))    # False
print(Solution().isValid("({[}]"))     # False
print(Solution().isValid("{{[()]}}"))  # True
print(Solution().isValid("{{[()}}}}")) # False