var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var temp;

  someInstance.enqueue = function(value) { // {0: 'b'}  // temp {0: 'a'}
    storage[size] = value;
    size++;
  };
                                          // {0: 'b', 1: 'c', 2: 'd'} // temp = 'a';
  someInstance.dequeue = function() {
    temp = storage[0];
    for (var i =0; i < size-1; i++) {
      storage[i] = storage[i+1];
    }
    delete storage[size];
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
