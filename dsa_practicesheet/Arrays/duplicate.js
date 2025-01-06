function findDuplicates(nums) {
    const seen = new Set();
    const duplicates = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return [...duplicates];
}
