class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
const searchBottomLeftValue = (root) => {
    if (!root) return null; // if the tree is empty, return null
  
    const queue = [root];  // initialize queue for BFS
    let leftmostValue = root.value;  // Track the leftmost value
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      // At each level, capture the first node's value as the leftmost
      leftmostValue = queue[0].value;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        // child nodes from left to right
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
  
    return leftmostValue;  // leftmost value of the last row
  };

  // create the tree nodes
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(searchBottomLeftValue(root)); // Should print 6
