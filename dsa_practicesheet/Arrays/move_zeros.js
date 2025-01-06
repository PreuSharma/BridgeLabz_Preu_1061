function moveZeroes(nums) {
    let index = 0;
    
    for (let num of nums) {
        if (num !== 0) {
            nums[index++] = num;
        }
    }
    
    while (index < nums.length) {
        nums[index++] = 0;
    }
}
