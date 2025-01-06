class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}



function bfsTree(root) {
    if (!root) return;

    const queue = [root]; // Initialize queue with the root node

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Remove node from the front of the queue
        console.log(currentNode.val); // Process the current node

        if (currentNode.left) queue.push(currentNode.left); // Add left child to the queue
        if (currentNode.right) queue.push(currentNode.right); // Add right child to the queue
    }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

bfsTree(root); // Output: 1 2 3 4 5 6 7
