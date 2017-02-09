var Stack = function() {
  var instance = {
    sizeCount: 0,
    storage: {},
    temp: 0
  };

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  size: function() {
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

