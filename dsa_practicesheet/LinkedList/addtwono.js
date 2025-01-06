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

    addTwoNumbers(l1, l2) {
        let dummy = new Node(0); // Dummy node for the resulting list
        let current = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            const sum = (l1?.data || 0) + (l2?.data || 0) + carry;
            carry = Math.floor(sum / 10);
            current.next = new Node(sum % 10); // Create a new node using Node class
            current = current.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next; // Return the head of the resulting list
    }
    
    
}


// Test the implementation
let l1 = new LinkedList();
l1.addInll(2); // 0
l1.addInll(4); // 1
l1.addInll(3); // 2

let l2 = new LinkedList();
l2.addInll(5); // 0
l2.addInll(6); // 1
l2.addInll(4); // 2

console.log("Linked List 1:");
l1.printll();

console.log("Linked List 2:");
l2.printll();

let resultList = new LinkedList();
resultList.head = resultList.addTwoNumbers(l1.head, l2.head);

console.log("Sum of Two Numbers:");
resultList.printll();



