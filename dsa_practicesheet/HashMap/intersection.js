function intersection(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = [];
    for (let num of nums2) {
      if (set1.has(num)) {
        result.push(num);
        set1.delete(num); 
      }
    }
    return result;
  }
  let nums5 = [1, 2, 2, 1];
  let nums6 = [2, 2];
  console.log(intersection(nums5, nums6));