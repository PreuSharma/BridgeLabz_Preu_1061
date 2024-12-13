//Utility Methods
/*
findLast(): Returns the last element that satisfies the provided testing function.

keys(): Returns a new Array Iterator object that contains the keys (indexes) of the array.

values(): Returns a new Array Iterator object that contains the values of the array.

entries(): Returns a new Array Iterator object that contains the key-value pairs of the array.

*/

// //1.findLast
// const nums=[1,2,3,4,5];
// const lastEven=nums.findLast(num=>num%2===0);
// console.log(lastEven);

//yeh es14 me aaya hai latest hai mera laptop version isko smjh ni paara isiliyeh humne pollyfill ka use kia n

if (!Array.prototype.findLast) {
    Array.prototype.findLast = function (callback, thisArg) {
      for (let i = this.length - 1; i >= 0; i--) {
        if (callback.call(thisArg, this[i], i, this)) {
          return this[i];
        }
      }
      return undefined;
    };
  }
  
  // Example usage
  const nums = [1, 2, 3, 4, 5];
  const lastEven = nums.findLast(num => num % 2 === 0);
  console.log(lastEven); // Output: 4
  
//2.keys
const nums2=[10,20,30];
const keys=nums2.keys();

for (const key of keys) {
  console.log(key); 
}

//3.values
const nums3=[10, 20, 30];
const values=nums3.values();

for(const value of values){
  console.log(value); 
}

//5.entries
const nums4=[10,20,30];
const entries=nums.entries();

for(const[index, value] of entries) {
  console.log(index, value);
}

