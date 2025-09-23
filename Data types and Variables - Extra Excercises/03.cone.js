function cone(r,h){

let l = Math.sqrt(r**2 + h**2);

let volume = (1/3) * Math.PI * r**2 * h;

let surfaceArea = Math.PI * r**2 + Math.PI * r * l;

console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${surfaceArea.toFixed(4)}`);

}

cone(3,5)
