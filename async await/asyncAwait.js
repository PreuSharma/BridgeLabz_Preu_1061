/*
Async/Await
async/await provides a cleaner way to handle asynchronous code compared to Promises or callbacks. 
It is syntactic sugar built on top of Promises. */


async function fetchData() {
    try {
      const result = await getDataPromise();
      console.log(result); // Logs: Hello, World!
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  