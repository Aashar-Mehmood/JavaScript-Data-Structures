class node{
  constructor(data, next=null){
    this.data = data;
    this.next = next; //pointer to newly added item
  }
}

class queue{
  elements = [];
  constructor(){
    this.head=null;
    this.tail=null;
  }
  enque(data){
    var Node = new node(data);
    if(this.head===null || this.tail === null){
      this.head=Node;
      this.tail=Node;
    }
    else{
      this.tail.next=Node;
      this.tail = Node;
    }
    this.elements.push(data);
  }
  deque(){
    if(this.head==null){
      console.log("No items in the Queue");
    }
    else{
      var prevHead = this.head;
      this.head = this.head.next;
      prevHead.data = null;
      prevHead = null;
    }
    this.elements.shift();
  }
  size(){
    return this.elements.length();
  }
  showAll(){
    console.log(this.elements);
  }
}
var q1 = new queue();
q1.enque(1);
q1.enque(2);
q1.enque(3);
q1.enque(4);
q1.enque(5);
q1.showAll();
q1.deque();
q1.showAll();
q1.enque(6);
q1.showAll();
q1.deque();
q1.deque();
q1.deque();
q1.deque();
q1.deque();
q1.showAll();
q1.deque();


