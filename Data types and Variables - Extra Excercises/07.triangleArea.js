function triangleArea (a, b, c) {


let s = (a + b + c) / 2;


let area2 = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area2);

}

triangleArea(2, 3.5, 4);