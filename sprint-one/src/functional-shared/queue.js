var Queue = function() {
  var instance = {
    sizeCount: 0,
    deleteCount: 0,
    storage: {},
    temp: 0
  };

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  size: function() {
    if (this.sizeCount < 0) {
      this.sizeCount = 0;
    }
    return this.sizeCount;
  },
  enqueue: function(value) {
    this.storage[this.sizeCount + this.deleteCount] = value;
    this.sizeCount++;
  },
  dequeue: function() {
    this.temp = this.storage[this.deleteCount];
    delete this.storage[this.deleteCount];
    this.deleteCount++;
    this.sizeCount--;
    return this.temp;
  }
};
