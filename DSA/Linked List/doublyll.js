class DoublyNode{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    addAtEnd(value){
        let newNode=new DoublyNode(value);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        } else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.size++;
    }

    addAtBeginning(value){
        let newNode=new DoublyNode(value);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        } else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
        this.size++;
    }

    deleteNode(value){
        if (this.head===null) 
            {
                return null;
            }
        let current=this.head;

        while(current){
            if(current.value===value){
                if(current.prev) 
                    {
                        current.prev.next=current.next;
                    }
                if(current.next) 
                    {
                        current.next.prev=current.prev;
                    }

                if(current===this.head) 
                    {
                        this.head=current.next;
                    }
                if(current===this.tail) 
                    {
                        this.tail=current.prev;
                    }

                this.size--;
                return;
            }
            current=current.next;
        }
    }

    printList()
    {
        let current=this.head;
        let list='';
        while(current)
        {
            list+=`${current.value} <-> `;
            current=current.next;
        }
        console.log(list + 'null');
    }
}

// Usage
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addAtEnd(10);
doublyLinkedList.addAtEnd(20);
doublyLinkedList.addAtBeginning(5);
doublyLinkedList.printList(); 
doublyLinkedList.deleteNode(10);
doublyLinkedList.printList(); 
