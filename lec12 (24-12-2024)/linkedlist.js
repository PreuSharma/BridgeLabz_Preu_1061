class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    addInll(element)
    {
        const newNode=new Node(element);
        if(this.head===null)
        {
            this.head=newNode;
        }
       else{
        let current=this.head;
        while(current.next!=null)
        {
            current=current.next;
        }
        current.next=newNode;
       }
        this.size++;
    }
    

    printll()
    {  
        let temp=this.head;
        while(temp!==null)
        { 
            console.log(temp.data)
            temp=temp.next;
        }
    }

    delete(value)
    {
        if(this.head===null)
        {
            return null;
        }
        else if(this.head.data===value)
        {
            this.head=this.head.next;
            this.size--;
        }
        else
        {
            let current=this.head;
            while(current.next!==null)
            {
                if(current.next.data === value) {
                current.next=current.next.next;
                this.size--;
            }
            current=current.next;
        }
    }
}
}
let l1=new LinkedList()
l1.addInll(2);
l1.addInll(3);
l1.addInll(4);
l1.addInll(5);

l1.printll();
l1.delete(3);
console.log("============")
l1.printll();
