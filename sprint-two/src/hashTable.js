var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var wasFound = false;
  var count = 0;

  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        wasFound = true;
        break;
      }
    }
    if (wasFound === false) {
      bucket.push([k, v]);
    }
  } else {
    this._storage.set(index, [[k, v]]); // storage= [ , [], [[]], ]
  }

  this._storage.each(function(bucket, index, storage) {
    if (!bucket) {
      count++;
    }
  });

  if (count > this._limit * 0.75) {
    this._storage.resize;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      break;
    }
  }
};

HashTable.prototype.resize = function(newLimit) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var hash = HashTable();

// [ [[k, v], [k, v], [k, v]], [], [] ]