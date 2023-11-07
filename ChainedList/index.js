class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }

  add(data){
    let element = this.head
    while(element.next){
      element = element.next
    }
    
  return this;
  }

}

const head = new LinkedList( new ListNode(data));

head.add(data: 5).add(data: 6).add(data: 7)
