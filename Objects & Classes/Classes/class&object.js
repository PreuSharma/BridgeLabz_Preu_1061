class personDetails{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    greet()
    {
        console.log(`hello your name is : ${this.name} and your age is ${this.age}`)
    }
}

let person1=new personDetails("Alice",24);
person1.greet();
