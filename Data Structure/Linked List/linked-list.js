//LinkedList class
function LinkedList(){

  var Node = function(element, next){
    this.element = element;
    this.next = next;
  }

  var head = null;
  var length = 0;

  this.add = function(element){
    head = new Node(element, head);
  }

  this.remove = function(){
    if(this.isEmpty()){
      return null;
    }
    else{
      var item = head.element;
      head = head.next;
      return item;
    }
  }

  this.isEmpty = function(){
    return head === null;
  }

  this.find = function(element){
    var node = head;
    while(node != null){
      if(node.element == element){
        return true;
      }
      node = node.next;
    }
    return false;
  }

  this.showAll = function(){
    console.log("Elements in the linkedList are: ");
    var node = head;
    while(node != null){
      console.log(node.element);
      node = node.next;
    }
    console.log("-----------");
  }
}


//Testing LinkedList
linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(15);
linkedList.showAll();
console.log(linkedList.remove());
linkedList.showAll();
console.log(linkedList.remove());
console.log(linkedList.remove());
linkedList.add(5);
linkedList.add(2);
console.log(linkedList.find(10));
console.log(linkedList.find(2));
