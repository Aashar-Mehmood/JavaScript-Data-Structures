// node class for creating node object
class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linked list class that contains node objects and methods
class linkedList {
  constructor(head = null) {
    this.head = head;
    console.log("list created");
  }

  // method to add node
  addNode(data) {
    var newNode = new node(data);
    // check if there is no item in list
    if (this.head == null) {
      this.head = newNode;
    } 
    // else go at end and add item there
     else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // add node at particluar index
  addAtIndex(index, data) {
    var newNode = new node(data);
    var current, prev;
    current = this.head;
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      current = this.head;
      var currentPos = 0;
      while (currentPos < index) {
        prev = current;
        current = current.next;
        currentPos++;
      }
      prev.next = newNode;
      newNode.next = current;
    }
  }

  //remove node at a particular index 
  removeFrom(index) {
    var iterator = 0;
    var curr = this.head;
    var prev;
    if (index == 0) {
      this.head = this.head.next;
      curr.next = null;
    } else {
      while (iterator < index) {
        iterator++;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
  } 

  // length of the list
  length() {
    var count = 1;
    if (!this.head) {
      count = 0;
    } else {
      var current = this.head;
      while (current.next) {
        count++;
        current = current.next;
      }
    }
    return count;
  }

  // first element in the list
  showFirst() {
    return this.head.data;
  }

  // last element in the list
  showLast() {
    var last = 0;
    if (this.head.next == null) {
      last = this.head.data;
    } else {
      var last = this.head;
      while (last.next) {
        last = last.next;
      }
      last = last.data;
    }
    return last;
  }

  // show all elements in the list
  showAll() {
    var arr = [];
    while (this.head) {
      arr.push(this.head.data);
      this.head = this.head.next;
    }
    if (arr.length == 0) {
      return "List is empty";
    } else {
      return arr;
    }
  }

  // clear the list 
  clearList() {
    while (this.head) {
      var curr = this.head;
      this.head = this.head.next;
      curr = null;
    }
  }
  isEmpty() {
    return this.length() == 0;
  }
}

var list = new linkedList();
list.addNode(5);
list.addNode(7);
list.addNode(8);
list.addAtIndex(0, 5);
list.addAtIndex(3, 10);

console.log("The length of list is : " + list.length());
console.log("Last Element of list is : " + list.showLast());
console.log("First Element of list is : " + list.showFirst());
console.log("list is empty ?" + list.isEmpty());
console.log("Elements in the Linked list are : " + list.showAll());
list.clearList();
console.log("list is empty ?" + list.isEmpty());
console.log("Elements in the Linked list are : " + list.showAll());

function showOptions() {
  const message =
    "==========================================\n\n" +
    "Select option to perform operation on list.\n\n" +
    "1 : to create the linked list.\n" +
    "2 : to add item in the list.\n" +
    "3 : to add item at a particular index.\n" +
    "4 : to remove from particular index.\n" +
    "5 : to show the first item in list.\n" +
    "6 : to show the last item in list.\n" +
    "7 : to print all the items in list\n" +
    "8 : to clear the list.\n" +
    "9 : to exit.\n\n" +
    "===========================================\n";
}
