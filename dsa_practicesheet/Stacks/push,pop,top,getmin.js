class Stack {
    constructor() {
        this.items = [];
        this.minStack = [];  // Stack to store the minimum elements
    }

    push(element) {
        this.items.push(element);
        
        // If minStack is empty or the new element is smaller than or equal to the current minimum, push it to minStack
        if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(element);
        }
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const poppedElement = this.items.pop();
        
        // If the popped element is the same as the top of minStack, pop it from minStack as well
        if (poppedElement === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return poppedElement;
    }

    top() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    // Returns the minimum element in the stack
    getMin() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.top());      // Output: 30
console.log(stack.pop());      // Output: 30 (Stack: [10, 20])
console.log(stack.top());      // Output: 20 (Stack: [10, 20])
stack.push(5);                // Stack: [10, 20, 5]
console.log(stack.getMin());  // Output: 5 (since 5 is now the minimum)
