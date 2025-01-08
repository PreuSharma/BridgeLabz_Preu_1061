// class Stack{
//     constructor()
//     {
//         this.item=[];
//     }
//     push(element)
//     {
//         this.item.push(element)
//     }
//     pop()
//     {
//         if(this.isEmpty())
//         {
//             return `Underflow`;
//         }
//         return this.item.pop();
//     }
//     peek()
//     {
//         if(this.isEmpty())
//         {
//             return `Stack is empty`
//         }
//         return this.item[this.item.length-1]
//     }
//     isEmpty()
//     {
//         return this.item.length===0
//     }
//     printStack()
//     {
//         return this.item.join(" ");
//     }
// }
// let st=new Stack();
// st.push(1);
// st.push(2);
// st.push(3);
// console.log(st.printStack());
// console.log(st.pop());
// console.log(st.peek());
// console.log(st.printStack());














class Queue{
    constructor()
    {
        this.item=[];
    }
    enqueue(element)
    {
        this.item.push(element)
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return `Underflow`
        }
        return this.item.shift();
    }
    front()
    {
        if(this.isEmpty())
        {
            return `Queue is empty`
        }
        return this.item[0];
    }
    isEmpty()
    {
        return this.item.length===0
    }
    printQueue()
    {
        return this.item.join(" ");
    }

}

let q=new Queue()
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.printQueue());

console.log(q.dequeue());
console.log(q.front());
console.log(q.isEmpty())
console.log(q.printQueue());
