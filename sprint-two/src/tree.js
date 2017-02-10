var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    this.children.push(Tree(value));
  },
  contains: function(target) {
    var wasFound = false;
    var recursiveContains = function(parent) {
      if (parent.value === target) {
        wasFound = true;
      } else {
        parent.children.forEach(function(newParent) {
          recursiveContains(newParent);
        });
      }
    };
    recursiveContains(this);
    return wasFound;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
