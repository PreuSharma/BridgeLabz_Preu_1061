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

    stockSpan(prices) {
        const span = [];
        const stack = [];
    
        for (let i = 0; i < prices.length; i++) {
            while (stack.length && prices[stack[stack.length - 1]] <= prices[i]) {
                stack.pop();
            }
            span[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
            stack.push(i);
        }
        return span;
    }
    
   
}

// Initialize the stack and prices array
const stack = new Stack();

// Stock prices for the days
const prices = [100, 80, 60, 70, 60, 75, 85];

// Calculate stock span for each day
const span = stack.stockSpan(prices);

console.log("Stock Span for Each Day:", span);
