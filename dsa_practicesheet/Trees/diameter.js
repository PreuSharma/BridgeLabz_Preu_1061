class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  function diameterOfBinaryTree(root) {
    let maxDiameter = 0;
    
    function depth(node) {
      if (!node) return 0;
      let left = depth(node.left);
      let right = depth(node.right);
      maxDiameter = Math.max(maxDiameter, left + right);
      return Math.max(left, right) + 1;
    }
    
    depth(root);
    return maxDiameter;
  }
  const root5 = { val: 1, left: { val: 2, 
    left: { val: 4, left: null, right: null },
   right: { val: 5, left: null, right: null }}, 
   right: { val: 3, left: null, right: null }};
  console.log(diameterOfBinaryTree(root5)); 