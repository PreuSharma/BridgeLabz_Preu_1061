//41. Create a function to calculate the distance between two points defined by their x, y coordinates

function calculateDistance(x1,y1,x2,y2)
{
    let dx=x2-x1;
    let dy=y2-y1;
    return Math.sqrt(dx*dx+dy*dy);
}

let distance=calculateDistance(1,2,4,6);
console.log(distance);
