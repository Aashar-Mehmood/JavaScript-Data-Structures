class node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class stack{
  
  constructor(head=null){
    this.head = head;
  }
  size = 0;
  allItems=[];
  pushFunc(data){ 
    var item = new node(data);
    if(this.head==null){
      this.head = item;
    }
    else{
      item.next = this.head;
      this.head = item;
    }
    console.log(`${data} is added in the stack`);
    this.allItems.unshift(data);
    this.size++;
  }
  popFunc(){
    if(!this.head){
      console.log("No items in the stack");
    }
    else{
      var data = this.head.data;
      var currHead = this.head;
      this.head = this.head.next;
      currHead = null;
      console.log(`${data} is removed from the stack`);
    }
    this.allItems.shift();
    this.size--;
  }
  showAll(){
    console.log(this.allItems);
  }
  clearStack(){

    while(this.head){
      var currhead = this.head;
      this.head = this.head.next;
      this.head.data=null;
      currHead = null;
    }
    this.head = null;
    this.allItems = [];
    this.size = 0;
  }
  showSize(){
    console.log(this.size);
  }
  searchItem(item){
    let index = 0;
    var cuurHead = this.head;
    while(cuurHead){
      if(currHead.data===item){
        return index;
        break;
      }
      else{
        index++;
        currHead=currHead.next;
      } 
    }
  }
}

var st1 = new stack();
st1.clearStack();
st1.pushFunc(10);
st1.pushFunc(9);
st1.pushFunc(8);
st1.pushFunc(7);
st1.pushFunc(6);
st1.showAll();
st1.popFunc();
st1.showAll();