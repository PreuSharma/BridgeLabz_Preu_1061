//31. Create a function that will return the number of words in a text

// let s="chitkara"
// function noOfWords(s)
// {
//     return s.length;
// }
// console.log(noOfWords(s));


function  numbertotext(text){
    let word = text.split(" ")
    return word.length
  }
  let word ="my name is kuber"
  console.log(numbertotext(word));

