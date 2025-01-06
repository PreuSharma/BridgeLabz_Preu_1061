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
  
    
    size() {
      return this.queue.length;
    }
  }

  

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.front()); 
console.log(q.dequeue()); 
console.log(q.front()); 
console.log(q.size()); 
console.log(q.isEmpty());
