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



    sortList() {
        if (this.head === null || this.head.next === null) {
            return; 
        }

        let current = this.head;
        let index = null;

        while (current !== null) {
            index = current.next;

            while (index !== null) {
                if (current.data > index.data) {
                    // Swap data
                    let temp = current.data;
                    current.data = index.data;
                    index.data = temp;
                }
                index = index.next;
            }
            current = current.next;
        }
    }
}

let l1=new LinkedList()
l1.addInll(5);
l1.addInll(8);
l1.addInll(8);
l1.addInll(56);
//l1.printll();


let l2=new LinkedList()
l2.addInll(6);
l2.addInll(5);
l2.addInll(8);
l2.addInll(11);
l2.addInll(14);
l2.addInll(18);
l2.addInll(20);


let l3=new LinkedList()


let tempA=l1.head;
let tempB=l2.head;

while(tempA!=null && tempB!=null)
{
    let tempC=tempA.data+tempB.data;
    l3.addInll(tempC);
    tempA=tempA.next;
    tempB=tempB.next;
}
if(tempA!=null)
{
    while(tempA.next!=null)
    {
        l3.addInll(tempA.data);
        tempA=tempA.next;
    }
}

else if(tempB!=null)
{
    while(tempB.next!=null)
    {
        l3.addInll(tempB.data);
        tempB=tempB.next;
    }    
}

console.log("sorted")
l3.sortList();
l3.printll()