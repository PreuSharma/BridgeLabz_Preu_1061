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
  

    generateBinaryNumbers(N) {
      let queue = [];
      let result = [];
  
     
      queue.push('1');
  
   
      for (let i = 1; i <= N; i++) {
        let current = queue.shift(); 
        result.push(current); 
  
        
        queue.push(current + '0');
        queue.push(current + '1');
      }
  
      return result;
    }
  }
  
  const queue = new Queue();
  const N = 5;
  
 
  console.log(queue.generateBinaryNumbers(N));  
  