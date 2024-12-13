//Create a function that will receive n as argument and return an array of n random numbers from 1 to n.
// The numbers should be unique inside the array.

function abcd(n)
{
    let arr=[];
    for(let i=0;i<n;i++)
    {
        let p=Math.floor(Math.random()*i)
        arr.push(p);
    }
    return arr;
}
let n=10;
console.log(abcd(n))





const uniqueNumbers = new Set();

    // Keep adding random numbers until we have n unique numbers
    while (uniqueNumbers.size < n) {
        const randomNum = Math.floor(Math.random() * n) + 1; // Random number between 1 and n
        uniqueNumbers.add(randomNum);
    }