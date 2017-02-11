var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  this.storage[node] = {value: node, edge: []};
};


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(1)
  return this.storage[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(n^2)
  for (var i = 0; i < this.storage[node].edge.length; i++) {
    this.removeEdge(node, this.storage[node].edge[i]);
  }

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(n)
  var wasFound = false;
  this.storage[fromNode].edge.forEach(function(edge) {
    if (edge === toNode) {
      wasFound = true;
    }
  });
  return wasFound;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(n)
  for (var i = 0; i < this.storage[fromNode].edge.length; i++) {
    if (this.storage[fromNode].edge[i] === toNode) {
      this.storage[fromNode].edge.splice(i, 1);
    }
  }
  for (var i = 0; i < this.storage[toNode].edge.length; i++) {
    if (this.storage[toNode].edge[i] === fromNode) {
      this.storage[toNode].edge.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n)
  for (var node in this.storage) {
    cb(this.storage[node].value);
  }
};









