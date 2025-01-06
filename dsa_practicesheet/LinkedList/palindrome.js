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

    isPalindrome(head) {
        let slow = head;
        let fast = head;
        const stack = [];
    
        while (fast && fast.next) {
            stack.push(slow.val);
            slow = slow.next;
            fast = fast.next.next;
        }
    
        if (fast) slow = slow.next; // Skip the middle for odd length
    
        while (slow) {
            if (stack.pop() !== slow.val) return false;
            slow = slow.next;
        }
        return true;
    }
    
    
}
let l1 = new LinkedList();
l1.addInll(1); // 0
l1.addInll(2); // 1
l1.addInll(2); // 2
l1.addInll(1); // 3

console.log("Linked List:");
l1.printll();

console.log("Is Palindrome:", l1.isPalindrome(l1.head));



