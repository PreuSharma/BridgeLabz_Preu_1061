let obj={
    name:"preu",
    age:21,
    obj2 : {
        name:"riddhi"
    }
}
console.log("Obj : ",obj)

let copy={...obj};
console.log("copy : ",copy)

copy.name="change"
copy.obj2.name="siya";
console.log(copy)
console.log(obj)


let copyassign=Object.assign({},obj)

console.log("copyassign : ",copyassign)
copyassign.name="myyyy"
console.log("copyassign : ",copyassign)
console.log("Obj : ",obj)

copyassign.obj2.name="maayayaauhxu"
console.log("copyassign : ",copyassign)
console.log("Obj : ",obj)