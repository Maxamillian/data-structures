var Queue = function(value) {
  var instance = Object.create(queueMethods);
  instance.sizeCount = 0;
  instance.storage = {};
  instance.temp = 0;
  instance.deleteCount = 0;
  return instance;
};

var queueMethods = {
  size: function() {
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


