//45. Create a function to calculate the sum of all the numbers in a jagged array
//(contains numbers or other arrays of numbers on an unlimited number oflevels)

// sum of jagged array
function jaggedarray(){
    let arr=[1,2,3,4,5,6,7,8]
    let sum=0
    for(let element of arr){
      if(Array.isArray(element)){
        sum+=jaggedarray(element)
      }else if(typeof element==="number"){
        sum+=element
      }
    }
    console.log(sum);
    
    
    }
    jaggedarray()