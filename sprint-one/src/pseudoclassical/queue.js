var Queue = function() {
  this.sizeCount = 0;
  this.deleteCount = 0;
  this.storage = {};
  this.temp;
};

Queue.prototype.size = function() {
  if (this.sizeCount < 0) {
    this.sizeCount = 0;
  }
  return this.sizeCount;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeCount + this.deleteCount] = value;
  this.sizeCount++;
};

Queue.prototype.dequeue = function() {
  this.sizeCount--;
  this.temp = this.storage[this.deleteCount];
  delete this.storage[this.deleteCount];
  this.deleteCount++;
  return this.temp;
};



