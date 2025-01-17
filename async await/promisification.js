/*
Promisification
Promisification refers to converting a function that uses callbacks into one that returns a Promise.
This is useful for working with modern async/await syntax.*/

// Callback-based function
function getData(callback) {
    setTimeout(() => callback(null, "Hello, World!"), 1000);
  }
  
  // Promisifying it
  function getDataPromise() {
    return new Promise((resolve, reject) => {
      getData((err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
  
  getDataPromise().then(console.log).catch(console.error);
  