/*

Stack ki Basic Operations:
Push: Stack mein element ko add karna.
Pop: Stack se element ko remove karna.
Peek/Top: Stack ke top element ko dekhna (par remove nahi karna).
isEmpty: Stack khaali hai ya nahi, yeh check karna.
Size: Stack mein kitne elements hain, yeh pata karna.

*/

class Stack{
    constructor(){
        this.stack=[];
    }

    push(element){
        this.stack.push(element);
    }
    pop(){
        if (this.isEmpty()){
            return 'Stack is empty';
        }
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'Stack is empty';
        }
        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
}

const stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); 
console.log(stack.peek()); 
console.log(stack.size());  
console.log(stack.isEmpty()); 
