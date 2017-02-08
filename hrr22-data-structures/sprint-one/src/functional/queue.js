var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  someInstance.enqueue = function(value) {
    size++;
  };

  someInstance.dequeue = function() {
    size--;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
