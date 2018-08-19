let SideA = prompt(`Input first side of the triangle`,``);
let SideB = prompt(`Input second side of the triangle`,``);
let angleBetween = prompt(`Input an angle between sides of a triangle, degrees`,``);

const angle = 180;

let SideC = Math.sqrt(SideA*SideA+SideB*SideB-2*SideA*SideB*Math.cos(angleBetween*Math.PI/angle));
let trianglePerimeter = +SideA + +SideB + +SideC;
let triangleSquare = 1/2*SideA*SideB*Math.sin(angleBetween*Math.PI/angle);

if(SideA > 0 && SideB > 0 && SideC > 0 && angleBetween > 0 && triangleSquare >0) {
    console.log(
        ` c length:`, SideC.toFixed(2), `\n`,
        `Triangle square:`, triangleSquare.toFixed(0), `\n`,
        `Triangle perimeter:`, trianglePerimeter.toFixed(2), `\n`
    )
} else {
    console.log(`Invalid data`);    
}