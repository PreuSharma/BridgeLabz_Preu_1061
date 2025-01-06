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

    removeNthFromEnd(head, n) {
        const dummy = { next: head };
        let slow = dummy;
        let fast = dummy;
    
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }
    
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }
    
        slow.next = slow.next.next;
        return dummy.next;
    }
    
    
}

let l1=new LinkedList()
l1.addInll(5);  //0
l1.addInll(8);  //1
l1.addInll(8);  //2
l1.addInll(56); //3


console.log("Original Linked List:");
l1.printll();

l1.head = l1.removeNthFromEnd(l1.head, 2);

console.log("After Removing 2nd Node from the End:");
l1.printll();




