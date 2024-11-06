//Question 3
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


const countNodes = (root) => {
    if (!root) return 0; // if tree is empty return 0
  
    // function to calculate height of the tree
    const getHeight = (node) => {
      let height = 0;
      while (node) {
        height++;
        node = node.left;
      }
      return height;
    };
  
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
  
    if (leftHeight === rightHeight) {
      // if the left and right heights are the same, the left subtree is complete
      return (1 << leftHeight) + countNodes(root.right);
    } else {
      // otherwise, the right subtree is complete and one level shorter than the left
      return (1 << rightHeight) + countNodes(root.left);
    }
  };
  
  // Create the tree nodes
const root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

// Calculate the number of nodes
console.log(countNodes(root)); // Should print 7