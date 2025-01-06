class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
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

    isBalanced(s) {
        const stack = [];
        const pairs = { ')': '(', ']': '[', '}': '{' };
    
        for (let char of s) {
            if (['(', '[', '{'].includes(char)) {
                stack.push(char);
            } else if (pairs[char]) {
                if (stack.pop() !== pairs[char]) return false;
            }
        }
        return stack.length === 0;
    }
    
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.top()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.top()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2

const balanced = new Stack();
console.log(balanced.isBalanced("({[()]})"));  // Output: true (Balanced)
console.log(balanced.isBalanced("({[([)])}")); // Output: false (Not balanced)
