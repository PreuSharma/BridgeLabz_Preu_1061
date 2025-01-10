//i have an online store and i am checking my loyal customers

class Product{
    constructor(productName,productPrice)
    {
        this.productName=productName;
        this.productPrice=productPrice;
    }
}

class Customer{
    constructor(customerName,customePhoneNo,customerAddress)
    {
        this.customerName=customerName;
        this.customePhoneNo=customePhoneNo;
        this.customerAddress=customerAddress;
        this.orders=0;
    }

    addOrder()
    {
        this.orders++;
    }

    originalOnes()
    {
        if(this.orders>=5)
        {
            return `Loyal customer`;
        }
        else{
            return `New Customer`;
        }
    }
}
class Orders{
    constructor(orderId,product,customer,quantity)
    {
        this.orderId=orderId;
        this.product=product;
        this.customer=customer;
        this.quantity=quantity;
    }
}


let product1=new Product("Laptop", 1500);
let product2=new Product("Smartphone", 800);
let product3=new Product("Shirt", 30);


let customer1 = new Customer("Riddhi", "1234567890", "Ambala ");
let customer2 = new Customer("Riya", "9876543210", "chandigarh");

let order1 = new Orders(101, product1, customer1, 2);
let order2 = new Orders(102, product2, customer2, 1);
let order3 = new Orders(103, product3, customer1, 5);


customer1.addOrder();
customer1.addOrder();
customer1.addOrder();
customer1.addOrder();
customer1.addOrder();
customer2.addOrder();


console.log(customer1);
console.log(customer2);
console.log(`${customer1.customerName} is a ${customer1.originalOnes()}`)
console.log(`${customer2.customerName} is a ${customer2.originalOnes()}`)