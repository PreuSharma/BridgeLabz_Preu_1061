class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  function inorderTraversal(root) {
    let result = [];
    
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
    
    traverse(root);
    return result;
  }
  const root1 = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null }};
  console.log(inorderTraversal(root1)); 