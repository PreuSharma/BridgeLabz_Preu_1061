//sum of even index

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

    findMiddle(head) {
        let slow = head;
        let fast = head;
    
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
}

let l1=new LinkedList()
l1.addInll(5);  //0
l1.addInll(8);  //1
l1.addInll(8);  //2
l1.addInll(56); //3
l1.printll();

const middleNode = l1.findMiddle(l1.head);
console.log("Middle Node:");
console.log(middleNode.data);



