class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    nodeAtEnd(value)
    {
        let newNode=new Node(value);
        if(this.head===null)
        {
            this.head=newNode;
        }
        else{
            let current=this.head;
            while(current.next)  //
            {
                current=current.next;
            }
            current.next=newNode
        }
        this.size++;
    }

    nodeAtBegining(value)
    {
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
    }
    deleteNode(value)
    {
        if(this.head===null)
        {
            return null;
        }
        if(this.head.value===value)
        {
            this.head=this.head.next;
            this.size--;
            return;
        }
    let current=this.head;
      let previous=null;
  
      while(current&&current.value!==value){
        previous=current;
        current=current.next;
      }
      if(current){
        previous.next=current.next;
        this.size--;
      }
    }
    printList(){
      let current=this.head;
      let list='';
      while(current){
        list+=`${current.value} -> `;
        current=current.next;
      }
      console.log(list + 'null');
    }
  }
  

  const linkedList = new LinkedList();
  linkedList.nodeAtEnd(10);
  linkedList.nodeAtEnd(20);
  linkedList.nodeAtEnd(30);
  linkedList.nodeAtBegining(5);
  
  linkedList.printList(); 
  
  linkedList.deleteNode(20);
  linkedList.printList(); 
  