var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // O(1)
  this._storage[item] = item;
};

setPrototype.contains = function(item) { // O(n)
  var wasFound = false;
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      wasFound = true;
    }
  }
  return wasFound;
};

setPrototype.remove = function(item) { // O(1)
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
