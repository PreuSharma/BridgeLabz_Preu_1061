// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: "John", age: 30 };
//         callback(null, data); // This will call the callback when the data is ready
//     }, 1000);
// }

// // Pass a valid callback function that will handle the result
// fetchData((err, data) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("Data received:", data);
//     }
// });







function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);  // If everything goes well, call resolve
            // If there was an error, you could call reject(error);
        }, 1000);
    });
}
fetchDataPromise()
    .then(data => {
        console.log("Data received:", data);  // Data received: { name: "John", age: 30 }
    })
    .catch(error => {
        console.log("Error:", error);
    });
