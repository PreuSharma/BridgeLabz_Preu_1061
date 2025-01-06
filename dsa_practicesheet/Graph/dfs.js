class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function dfsTree(root) {
    if (!root) return; // Base case: agar node null hai, to return kar jao

    console.log(root.val); // Process the current node

    // Recursively visit left subtree
    dfsTree(root.left); 

    // Recursively visit right subtree
    dfsTree(root.right); 
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

dfsTree(root); // Output: 1 2 4 5 3 6 7
