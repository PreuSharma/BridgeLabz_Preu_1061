let obj1={
    
    a: 1,
    b: { x:56,y: 20 },
    c: 3

}

let obj2={
    b: { y: 25, z: 30 },
    d: 4
}

// let obj3={...obj1,...obj2}

// let obj4=JSON.parse(JSON.stringify(obj3));
// console.log(obj4);


let result=Object.assign({},obj1,obj2);
console.log(result);