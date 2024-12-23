let obj={
    name:"preu"
}
function fun(lastname)
{
    console.log(this.name +" "+lastname);
}

fun.call(obj)
fun.apply(obj,['sharma'])
let print=fun.bind(obj,"sharma")
print()


