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
l1.addInll(5);  //0
l1.addInll(8);  //1
l1.addInll(8);  //2
l1.addInll(56); //3
//l1.printll();


let l2=new LinkedList()
l2.addInll(6); //0
l2.addInll(5); //1
l2.addInll(8); //2
l2.addInll(11); //3
l2.addInll(14); //4
l2.addInll(18); //5
l2.addInll(20); //6


let l3=new LinkedList()


let tempA=l1.head;
let tempB=l2.head;
let index=0;
while(tempA!=null && tempB!=null)
{
    if(index%2!==0)
    {
        let sum=0
        if(tempA!==null) 
        {
            sum+=tempA.data;
            tempA=tempA.next;
        }
        if(tempB!==null) 
        {
            sum+=tempB.data;
            tempB=tempB.next;
        }
        l3.addInll(sum);
    }
    else 
    {
        if(tempA!==null) 
            {
                tempA=tempA.next;
            }
        if(tempB!==null) 
        {
            tempB=tempB.next;
        }
    }
    index++; 
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

//console.log("sorted")
//l3.sortList();
l3.printll()
// console.log(l3.size)