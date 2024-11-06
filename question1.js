// QUESTION 1
// Define the Node class to represent each node in the binary tree
class Node {
    // The constructor sets up each node with a value, and left and right pointers
    constructor(value) {
      this.value = value; 
      this.left = null;   
      this.right = null;  
    }
  }
  
  // Define the inorder function to traverse the tree in an inorder manner
  function inorder(node) {
    // if the current node is null, just return 
    if (node === null) return;
    
    // call inorder on the left subtree
    inorder(node.left);
    
    // print the value of the current node
    console.log(node.value);
    
    // call inorder on the right subtree
    inorder(node.right);
  }
  
  // Set up the binary tree
  // Create nodes with values 1, 2, 3, 4, 5
  let root = new Node(1);     // Root node 
  root.left = new Node(2);    // Left child of root 
  root.right = new Node(3);   // Right child of root 
  root.left.left = new Node(4); // Left child of node 2 
  root.left.right = new Node(5); // Right child of node 2 
  
  // Expected output in inorder traversal: 4, 2, 5, 1, 3
  inorder(root);


