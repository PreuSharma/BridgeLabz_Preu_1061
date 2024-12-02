let cart=[];

function addItems(itemName,itemPrice)
{
    let obj={
        name:itemName,
        price:itemPrice
    }
    cart.push(obj);
}
addItems("Laptop",999);
addItems("mobile",9939);
console.log(cart);

let totalprice=cart.reduce((total,obj)=>
{
    return total+=obj.price;
},0
)

console.log(totalprice);
