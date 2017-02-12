var BinarySearchTree = function(value) {
  var resultTree = Object.create(methods);

  resultTree.value = value;
  resultTree.right = {value: null};
  resultTree.left = {value: null};

  return resultTree;
};


var methods = {
  insert: function(newValue) {
    var checkAgain = function(object) {
      if (newValue > object.value) {
        if (object.right.value === null) {
          object.right = {value: newValue, left: {value: null}, right: {value: null}};
        } else {
          checkAgain(object.right);
        }
      } else {
        if (object.left.value === null) {
          object.left = {value: newValue, left: {value: null}, right: {value: null}};
        } else {
          checkAgain(object.left);
        }
      }
    };

    checkAgain(this);
  },

  contains: function(target) {
    var checkContains = function(object) {
      if (object.value === null) {
        return false;
      } else if ( target === object.value ) {
        return true;
      } else if (target > object.value) {
        return checkContains(object.right);
      } else {
        return checkContains(object.left);
      }
    };

    return checkContains(this);
  },

  depthFirstLog: function(callback) {
    var checkContains = function(object) {
      if (object.value === null) {
        return;
      } else {
        callback(object.value);
      }
      checkContains(object.left);
      checkContains(object.right);
    };

    checkContains(this);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
