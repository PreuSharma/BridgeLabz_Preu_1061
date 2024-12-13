class CustomArray 
{
    constructor() 
    {
        this.items={};
        this.length=0;
    }

    //push method --last me 
    push(item) 
    {
        this.items[this.length]=item;
        this.length++;
    }

    //pop method --last se he 
    pop() 
    {
        if(this.length === 0)
        { 
            return undefined;
        }
        const lastItem=this.items[this.length-1];
        delete this.items[this.length-1];
        this.length--;
        return lastItem;
    }

    // index 
    get(index) 
    {
        return this.items[index];
    }

    // Set a value at a specific index
    set(index,value) 
    {
        if(index>=this.length) 
        {
            this.length=index+1;
        }
        this.items[index] = value;
    }

    // Display the array as a string
    toString() 
    {
        let result='';
        for(let i=0;i<this.length;i++) 
        {
            result+=(i===0?'':', ')+this.items[i];
        }
        return result;
    }
}

// Example 
const myArray=new CustomArray();
myArray.push(10);
myArray.push(20);
myArray.push(30);
console.log(myArray.toString()); 
console.log(myArray.pop()); 
console.log(myArray.get(0)); 
myArray.set(2, 50);
console.log(myArray.toString());