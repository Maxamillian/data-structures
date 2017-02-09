var Stack = function() {
  this.sizeCount = 0;
  this.storage = {};
  this.temp;
};

Stack.prototype.size = function() {
  if (this.sizeCount < 0) {
    this.sizeCount = 0;
  }
  return this.sizeCount;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

Stack.prototype.pop = function() {
  this.sizeCount--;
  this.temp = this.storage[this.sizeCount];
  delete this.storage[this.sizeCount];
  return this.temp;
};


