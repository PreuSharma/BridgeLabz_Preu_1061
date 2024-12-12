//37. Create a function that will convert a string in an array 
// containing the ASCII codes of each character

let s="Chitkara"
function convertToAscii(s)
{
    let c=s.split("");
    console.log(c);
    let finalArr=[]
    for(let i=0;i<c.length;i++)
    {
        finalArr.push(c[i].charCodeAt(0))
    }
    return finalArr
}
console.log(convertToAscii(s))