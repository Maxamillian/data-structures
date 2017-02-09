var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.sizeCount = 0;
  instance.storage = {};
  instance.temp = 0;
  instance.deleteCount = 0;
  return instance;
};

var stackMethods = {
  size: function() {
    if (this.sizeCount < 0) {
      this.sizeCount = 0;
    }
    return this.sizeCount;
  },

  push: function(value) {
    this.storage[this.sizeCount] = value;
    this.sizeCount++;
  },

  pop: function() {
    this.sizeCount--;
    this.temp = this.storage[this.sizeCount];
    delete this.storage[this.sizeCount];
    return this.temp;
  }
};


