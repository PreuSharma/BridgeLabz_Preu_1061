//Food Delivery App Scenario

let orderPlaced=new Promise((res,rej)=>
{
    setTimeout(res,1000,"Order Placed")
})
let orderSentToRestaurant=new Promise((res,rej)=>
{
    setTimeout(res,2000,"Order Sending to resturant")
})
let foodPrep=new Promise((res,rej)=>
{
    setTimeout(res,4000,"Food preparation")
})
let assignDeliveryPartner=new Promise((res,rej)=>
{
    setTimeout(res,5000,"Assigning Delivery Partner")
})
let orderPickedUp=new Promise((res,rej)=>
{
    setTimeout(res,6000,"Order Pick by the Delivery Partner")
})
let orderIsTracked=new Promise((res,rej)=>
{
    setTimeout(res,7000,"Order Tracking")
})
let foodIsDelivered=new Promise((res,rej)=>
{
    setTimeout(res,8000,"Food Delivering")
})

orderPlaced
    .then((message) => {
        console.log(message);
        return orderSentToRestaurant;
    })
    .then((message) => {
        console.log(message);
        return foodPrep;
    })
    .then((message) => {
        console.log(message);
        return assignDeliveryPartner;
    })
    .then((message) => {
        console.log(message);
        return orderPickedUp;
    })
    .then((message) => {
        console.log(message);
        return orderIsTracked;
    })
    .then((message) => {
        console.log(message);
        return foodIsDelivered;
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });