var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O(1)
    if (list.tail !== null) {
      list.head = list.tail;
    }

    list.tail = Node(value);

    if (list.head === null) {
      list.head = list.tail;
    } else {
      list.head.next = list.tail;
    }
  };

  list.removeHead = function() { // O(1)
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) { // O(n)
    var current = list.head;
    while (true) {
      if (current.value === target) {
        return true;
      } else if (current.next !== null) {
        current = current.next;
      } else {
        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


// head {value: 4, next: null}  -->  tail {value: 5, next: Object}
