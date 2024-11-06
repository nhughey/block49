// Question 2
// define the Node class to represent each node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// define the isSameTree function to check if two trees are identical
function isSameTree(tree1, tree2) {
  // if both nodes are null, they are the same at this point
  if (tree1 === null && tree2 === null) return true;

  // if one node is null and the other isn't, they are not the same
  if (tree1 === null || tree2 === null) return false;

  // check if the values are the same and check both subtrees
  return (
    tree1.value === tree2.value &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  );
}

// set up two binary trees with the same structure and values [1, 2, 3]
let tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);

let tree2 = new Node(1);
tree2.left = new Node(2);
tree2.right = new Node(3);

// test the isSameTree function with identical trees
console.log(isSameTree(tree1, tree2)); // Expected output: true

// modify tree2 to make it different from tree1
tree2.right.value = 4;

console.log(isSameTree(tree1, tree2)); // Expected output: false
