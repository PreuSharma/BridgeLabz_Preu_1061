class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  function maxDepth(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }

  
  const root5 = { val: 1, left: { val: 2, 
    left: { val: 4, left: null, right: null },
   right: { val: 5, left: null, right: null }}, 
   right: { val: 3, left: null, right: null }};
  console.log(maxDepth(root5)); 