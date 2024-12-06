function outerFunction(outerVariable) {
    
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }
}

let closureExample = outerFunction("I am outer");
closureExample("I am inner");


