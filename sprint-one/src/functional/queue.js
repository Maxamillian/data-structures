var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;
  var temp;

  someInstance.enqueue = function(value) {
    storage[size + count] = value;
    size++;
  };

  someInstance.dequeue = function() {
    temp = storage[count];
    delete storage[count];
    count++;
    size--;
    return temp;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};




