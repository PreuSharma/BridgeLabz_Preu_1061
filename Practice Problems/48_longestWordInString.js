//48. Create a function to return the longest word in a string

let s="Welcome to chitkara explore your potential"
function longestWord(s)
{
    let c=s.split(" ")
    console.log(c);
    let longestLength=""
    for(let i=0;i<c.length;i++)
    {
        if(c[i].length>longestLength.length)
        {
            longestLength=c[i];
        }
    }
    return longestLength;
}
console.log(longestWord(s))


