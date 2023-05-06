/*

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
*/

var MinStack = function() {
    this.stack = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const n = this.stack.length -1
    this.stack.push(val)
    val = Math.min(val, n >= 0 ? this.min[n] : val) //This part is critical
    this.min.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const n = this.stack.length -1
    return this.stack[n]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const n = this.stack.length -1
    return this.min[n]
};
 

 
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */