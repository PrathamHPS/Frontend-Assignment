// Question : Find the max vector in a given quadrant.

var points = [
    {x: 1, y: 1 }, 
    {x: -1, y: 1 }, 
    {x: -1, y: -1 },
    {x: 1, y: -1 }, 
    {x: 2, y: 2 }, 
    {x: -1, y: 2 }, 
    {x: -1, y: -2 }, 
    {x: 1, y: -2 }, 
    {x: 1, y: 6 }, 
    {x: -1, y: 4 }, 
    {x: -3, y: -1 }, 
    {x: 1, y: -1 }, 
    {x: 10, y: 1 }, 
    {x: -1, y: 11 }, 
    {x: -1, y: -1 }, 
    {x: 1, y: -1 } 
]
let magnitude = 0;
let max = 0;
let vector = 0;
for(let i=0; i<points.length; i++) {
    magnitude = (points[i].x)**2 + (points[i].y)**2 ;
    if (magnitude > max) {
        max = magnitude;
        // console.log(max);
        vector = i;
    }
    // console.log(points[i].x, points[i].y)
}
console.log('Max Vector is :', points[vector]);
