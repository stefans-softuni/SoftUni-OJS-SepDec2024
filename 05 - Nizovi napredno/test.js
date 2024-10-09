let nums = [5, 10, 15, 20, 25, 30];
let mid2 = nums.splice(3, 2, "twenty", "twenty-five");

console.log(nums.join("|"));
console.log(mid2.join("|"));


let nums2 = [1, 2, 3, 4, 5, 6];
let mid = nums2.splice(3, 2);

console.log(nums2.join("|"));
console.log(mid.join("|"));
