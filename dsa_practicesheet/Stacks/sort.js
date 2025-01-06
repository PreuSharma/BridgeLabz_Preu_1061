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

    sortStack() {
        const tempStack = [];
    
        while (this.items.length) {
            const temp = this.pop();
            while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
                this.push(tempStack.pop());
            }
            tempStack.push(temp);
        }
        return tempStack;
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(40);
stack.push(30);
stack.push(90);

console.log("Original Stack:", stack.items);   
const sortedStack = stack.sortStack();         
console.log("Sorted Stack:", sortedStack);     
