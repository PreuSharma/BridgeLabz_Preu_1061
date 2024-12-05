/*Node.js
Definition
Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside a web browser. It uses the V8 JavaScript engine (developed by Google) and is primarily used for building server-side applications.

Node.js ka use kahan hota hai?
Backend development: Websites aur APIs banane ke liye.
Server-side scripting: Dynamic pages generate karne ke liye.
Full-stack development: Frontend aur backend dono ke liye ek hi language (JavaScript) use karne ka option deta hai.
Real-time applications: Chat apps aur live updates ke liye.

*/

/*Syntax
Node.js doesn't have a specific syntax because it's not a programming language. Instead, it enables JavaScript code to run on the server.
*/


// Importing the http module
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Response header
  res.end('Hello, Node.js!\n'); // Response body
});

// Listening on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
