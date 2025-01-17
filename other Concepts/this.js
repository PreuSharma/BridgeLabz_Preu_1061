console.log(this);

function abcd()
{
    console.log(this);
}
abcd()

var obj={
    name:"dfg",
    greet: function()
    {
        console.log(this)
    }
}
obj.greet()
console.log(obj.greet())                                      