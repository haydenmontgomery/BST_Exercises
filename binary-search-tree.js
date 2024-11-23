class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    var currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (currentNode.val < val) {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (currentNode.val > val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    } else {
      if (currentNode.right === null) {
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(currentNode.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.val === val) return currentNode;
      if(currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if(currentNode.val === val) return currentNode;
    if(currentNode.val > val) {
      if (currentNode.left === null) return undefined;
      return this.findRecursively(val, currentNode.left);
    } else if (currentNode.val < val) {
      if (currentNode.right === null) return undefined;
      return this.findRecursively(val, currentNode.right);
    }
    return undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(valArray = [], currentNode = this.root) {
    valArray.push(currentNode.val);
    if (currentNode.left) this.dfsPreOrder(valArray, currentNode.left);
    if (currentNode.right) this.dfsPreOrder(valArray, currentNode.right);

    return valArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(valArray = [], currentNode = this.root) {
    if (currentNode.left) this.dfsInOrder(valArray, currentNode.left);
    valArray.push(currentNode.val);
    if (currentNode.right) this.dfsInOrder(valArray, currentNode.right);

    return valArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(valArray = [], currentNode = this.root) {
    if (currentNode.left) this.dfsPostOrder(valArray, currentNode.left);
    if (currentNode.right) this.dfsPostOrder(valArray, currentNode.right);
    valArray.push(currentNode.val);

    return valArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let current = this.root;
    const toVisitQueue = [];
    const valArray = [];
    toVisitQueue.push(current);
    while(toVisitQueue.length) {
      current = toVisitQueue.shift();
      valArray.push(current.val)
      if (current.left) {
        toVisitQueue.push(current.left);
      }
      if (current.right) {
        toVisitQueue.push(current.right);
      }
    }
    return valArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    // Tree is empty
    if (!this.root) return null; 

    // Helper to find the minimum value in a subtree
    const findMin = (node) => {
        while (node.left) node = node.left;
        return node;
    };

    // Recursive function to remove a node
    const removeNode = (node, val) => {
      // Base case: node not found
        if (!node) return null; 

        if (val < node.val) {
            // Go left
            node.left = removeNode(node.left, val); 
        } else if (val > node.val) {
            // Go right
            node.right = removeNode(node.right, val); 
        } else {
            // Node found, handle three cases:
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;         
            if (!node.right) return node.left;         

            // Two children
            const successor = findMin(node.right);   
            node.val = successor.val;                
            node.right = removeNode(node.right, successor.val); 
        }
        // Return updated subtree
        return node; 
    };

    // Start removal at the root
    this.root = removeNode(this.root, val); 
    return this.root;
  }


  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
