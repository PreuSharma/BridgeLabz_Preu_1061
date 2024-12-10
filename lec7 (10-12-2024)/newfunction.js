//syntax
const func = new Function('param1', 'param2', 'return param1 + param2;');

//Example
const add = new Function('a', 'b', 'return a + b;');
console.log(add(2, 3)); // 5



/*Important Notes:

Using new Function can be risky as it uses eval internally, which can lead to security issues.
It is generally not recommended to use new Function() in production code because of the security implications and potential performance concerns.
Instead, prefer using function declarations or expressions. */