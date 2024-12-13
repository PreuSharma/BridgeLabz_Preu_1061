//42. Create a function that will return a Boolean value indicating if two circles defined
//  by center coordinates and radius are intersecting



let x1=0,y1=0,r1=5;
let x2=3,y2=4,r2=4;


function areCirclesIntersecting(x1,y1,r1,x2,y2,r2) {
    let distance=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    return distance<=(r1+r2);
}

console.log(areCirclesIntersecting(x1,y1,r1,x2,y2,r2)); 
