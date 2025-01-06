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
  
  
  linkedList.printList(); 

  


class LinkedList2{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    nodeAtEnd2(value)
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

    nodeAtBegining2(value)
    {
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
    }
    deleteNode2(value)
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
    printList2(){
      let current=this.head;
      let list='';
      while(current){
        list+=`${current.value} -> `;
        current=current.next;
      }
      console.log(list + 'null');
    }
  }
  

  const linkedList2 = new LinkedList2();
  linkedList2.nodeAtEnd2(40);
  linkedList2.nodeAtEnd2(50);
  linkedList2.nodeAtEnd2(60);
  
  
  linkedList2.printList2(); 

  

//merge 
let current1=linkedList.head;
let current2=linkedList2.head;
if(current1===null)
{
    linkedList.head=current2;
}
else{
    while(current1.next)
    {
        current1=current1.next;
    }
    current1.next=current2;
    linkedList.size+=linkedList2.size;
}

linkedList.printList();