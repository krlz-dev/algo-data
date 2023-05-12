/*The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

 

Example 1:

Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0 
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
Example 2:

Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3
 

Constraints:

1 <= students.length, sandwiches.length <= 100
students.length == sandwiches.length
sandwiches[i] is 0 or 1.
students[i] is 0 or 1. */



class ListNode {    
    constructor (val) {
        this.val = val;
        this.next = null;
    } 
}

class GeneralQueue {

    // Implementing this with dummy nodes would be easier!
    constructor() {
        this.left = null;
        this.right = null;
    }

    enqueue(val) {

        const newNode = new ListNode(val);
        newNode.next = null;
        if (this.right != null) {  
        // Queue is not empty
             
            this.right.next = newNode;
            this.right = this.right.next;
        } else {       
        // Queue is empty             
            this.left = newNode;
            this.right = newNode;
        }
    }

    dequeue() {
        if (this.left == null) {
        // Queue is empty 
            return;
        }
        // Remove left node and return value
        const val = this.left.val;
        this.left = this.left.next;
        return val;    
    }

    print() {
        let cur = this.left;
        let s = "";
        while(cur != null) {
            s+= cur.val + "->";
            cur = cur.next;
        }
        console.log(s)
    }
}


var countStudents = function(students, sandwiches) {
    let repeatedStudentref = 1;
    let sandWichLength = sandwiches.length;
    let studentLength = students.length; 
    let studentQueue = new GeneralQueue();
    students.forEach(student => {
        studentQueue.enqueue(student)
    });
    while(studentLength && sandWichLength){
        let currentStudent = studentQueue.dequeue();
        if(currentStudent === sandwiches[0]){
            sandwiches.shift();
            studentLength--;
            sandWichLength--;
            repeatedStudentref = 1;
            continue;
        }
        repeatedStudentref++;
        if(repeatedStudentref >studentLength){
            break
        }
studentQueue.enqueue(currentStudent)


    }
    return studentLength;
};

/*function countStudents(students, sandwiches) {
    let studentPointer = 0;
    let sandwichPointer = 0;
    let rejections = 0;

    while (studentPointer in students) {
        if (rejections === students.length - studentPointer) break;

        if (sandwiches[sandwichPointer] == students[studentPointer]) {
            sandwichPointer++;
            rejections = 0;
        } else {
            students.push(students[studentPointer]);
            rejections++;
        }

        studentPointer++;
    }

    return rejections;
}; */
