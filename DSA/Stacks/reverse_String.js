class Stack
{
    constructor(){
        this.stack=[];
    }
    push(element) 
    {
        this.stack.push(element); 
    }
    pop() 
    {
        if(this.isEmpty()) 
        {
            return "Stack is empty"; 
        }
        return this.stack.pop(); 
    }

    peek() 
    {
        if(this.isEmpty()) 
        {
            return "Stack is empty"; 
        }
        return this.stack[this.stack.length-1];
    }

    isEmpty() 
    {
        return this.stack.length===0; 
    }

    size() 
    {
        return this.stack.length;
    }
}





function reverseString(str) 
{
    const stack=new Stack();
    for(let i=0;i<str.length;i++) 
    {
        stack.push(str[i]);
    }

    let reversedStr='';
    while(!stack.isEmpty()) 
    {
        reversedStr+=stack.pop();
    }

    return reversedStr;
}

console.log(reverseString("hello")); 
