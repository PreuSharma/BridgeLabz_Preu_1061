class Queue {
    constructor() {
      this.queue = [];
    }
    enqueue(value) {
      this.queue.push(value);
    }
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.queue.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.queue[0];
    }
  

    isEmpty() {
      return this.queue.length === 0;
    }
  
  
    reverseFirstKElements(k) {
      if (k > this.queue.length || k <= 0) {
        console.log("Invalid value of K");
        return;
      }
  
      let stack = [];
  
      for (let i = 0; i < k; i++) {
        stack.push(this.dequeue());
      }
  
     
      while (stack.length > 0) {
        this.enqueue(stack.pop());
      }

      let size = this.queue.length;
      for (let i = 0; i < size - k; i++) {
        this.enqueue(this.dequeue());
      }
    }
  }

  

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log("Original Queue: ", q.queue); 

q.reverseFirstKElements(3);
console.log("Queue after reversing first 3 elements: ", q.queue);
