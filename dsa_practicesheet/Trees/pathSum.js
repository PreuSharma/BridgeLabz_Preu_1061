class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  function hasPathSum(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === sum;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
  }

  const root5 = { val: 1, left: { val: 2, 
    left: { val: 4, left: null, right: null },
   right: { val: 5, left: null, right: null }}, 
   right: { val: 3, left: null, right: null }};
  console.log(hasPathSum(root5,9)); 