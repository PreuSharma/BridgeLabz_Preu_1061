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
  
    canCompleteTasks(tasks) {
      tasks.sort((a, b) => a[1] - b[1]);
  
      let time = 0;
  
      for (let task of tasks) {
        time += task[0];
        if (time > task[1]) return false;
      }
  
      return true; 
    }
  }
  

  const queue = new Queue();
  
  const tasks = [
    [3, 5],  
    [2, 7],  
    [4, 6],  
  ];
  
  console.log(queue.canCompleteTasks(tasks)); 