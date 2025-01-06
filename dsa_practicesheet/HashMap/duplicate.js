function findDuplicates(nums) {
    let map = new Map();
    let result = [];
    for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
      if (map.get(num) === 2) {
        result.push(num);
      }
    }
    return result;
  }
  let nums2 = [4, 3, 2, 7, 8, 2, 3, 1];
  console.log(findDuplicates(nums2));  