//32. Create a function that will capitalize the first letter of each word in a text

let text="welcome to chitkara"
function capitalize(text)
{
    let word=text.split(" ")
    let capitalWord=word.map((word)=>word.charAt(0).toUpperCase()+word.slice(1));
    return capitalWord.join(" ")
}
console.log(capitalize(text))

