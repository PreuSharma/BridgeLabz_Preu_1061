//Mutator Methods (These modify the original array)
/*
1. push(): Adds one or more elements to the end of an array.

2. pop(): Removes the last element from an array.

3. shift(): Removes the first element from an array.

4. unshift(): Adds one or more elements to the beginning of an array.

5. splice(): Adds/removes elements from the array at a specified index.

6. reverse(): Reverses the order of the elements in an array.

7. sort(): Sorts the elements of an array in place (alphabetically or numerically).

8. fill(): Changes all elements in an array to a static value between a start and end index.

9.copyWithin(): Shallow copies part of an array to another location within the same array.
*/

let arr=[1,2,3];
console.log(`My array elements: ${arr} `)
//1.push - last me element add krne ke liyeh
arr.push(4);
console.log(`push method: ${arr}`)

//2.pop -last me se element bhar nickalan
arr.pop();
console.log(`pop method : ${arr}`)

//3.shift-start me element delete hojata hai
arr.shift();
console.log(`shift method : ${arr}`)

//4.unshift-start me element add hojata hai
arr.unshift(5);
console.log(`unshift method : ${arr}`)

//5.splice- add ya delete ya modify krta hai element particular index se
let fruits = ["apple", "banana", "cherry","strawbery","kiwi"];
console.log("original fruit: "+fruits)

fruits.splice(1, 2); //1 index se 2 index tak element delete krdo
console.log("1 : "+fruits) 

fruits.splice(2,1,"veggies","soup") //2index se 1 element ddelete kro aur usme veggies aur soup add krdo
console.log("2 : "+fruits)

fruits.splice(1, 0, "orange", "grape"); //1 index se 0 element delete kro aur orange aur grape add krdo
console.log("3 : "+fruits);

fruits.splice(1) //1 index se aage ke saare elements delete hojayege
console.log("4 : "+fruits)

//6.reverse-array ulta hojayega
arr.reverse()
console.log(`reverse method: ${arr}`)

//7.sort -array sort hojayega
arr.sort()
console.log(`sort method: ${arr}`)

//8.fill -array ke saare elements ko kisi particular elements se bhar deta hai
arr.fill("shop");
console.log(arr)

//9.copyWithin-array ke elements ko copy krta hai ek particular index pe 
let arr2=[1,2,3,4,5]
console.log(arr2)

arr2.copyWithin(1,3)
console.log(arr2)