'''
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

'''
class MinStack:
    def __init__(self):
        self.stack = []
        self.min = []

    def push(self, val: int) -> None:
        n = len(self.stack) - 1
        self.stack.append(val)
        val = min(val, self.min[n] if n >= 0 else val)
        self.min.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.min.pop()

    def top(self) -> int:
        n = len(self.stack) - 1
        return self.stack[n]

    def getMin(self) -> int:
        n = len(self.stack) - 1
        return self.min[n]


obj = MinStack()
obj.push(2)
obj.push(4)
print(obj.getMin()) # Output: 2

# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()