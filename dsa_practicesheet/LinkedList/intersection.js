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

    getIntersectionNode(headA, headB) {
        let a = headA;
        let b = headB;
    
        while (a !== b) {
            a = a ? a.next : headB;
            b = b ? b.next : headA;
        }
        return a;
    }
    
    
    
}

let l1=new LinkedList()
l1.addInll(5);  //0
l1.addInll(8);  //1
l1.addInll(8);  //2
l1.addInll(56); //3
l1.printll();



let l2 = new LinkedList();
l2.addInll(3); // 0
l2.addInll(4); // 1

// Create an intersection
let intersectNode = new Node(10);
l1.head.next.next.next = intersectNode; // Add intersection at l1[3]
l2.head.next.next = intersectNode; // Add intersection at l2[2]

intersectNode.next = new Node(15); // Append more nodes after the intersection

console.log("Linked List 1:");
l1.printll();

console.log("Linked List 2:");
l2.printll();

// Find intersection
const intersection = l1.getIntersectionNode(l1.head, l2.head);
if (intersection) {
    console.log("Intersection at node with data:", intersection.data);
} else {
    console.log("No intersection found");
}
