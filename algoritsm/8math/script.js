let a = -3;
let b = 1;
let e = 0.001;

console.log("a = " + a);
console.log("b = " + b);
console.log("e = " + e.toFixed(3));

let r = ( Math.pow(5, 1/2) - 1) / 2;
console.log("r = " + r.toFixed(3));

let x1 = a + Math.pow(r, 2) * (b - a);
console.log("x1 = " + x1.toFixed(3));

let x2 = a + r * (b - a);
console.log("x2 = " + x2.toFixed(3));

let y1 = (Math.pow(x1, 3) - 3 * x1 + 3);
console.log("y1 = " + y1.toFixed(3));

let y2 = (Math.pow(x2, 3) - 3 * x2 + 3);
console.log("y2 = " + y2.toFixed(3) + "\n\n\n");


if(y1 >= y2){
    b = x2;
    console.log("b = " + b.toFixed(3));
    x2 = x1;
    console.log("x2 = " + x2.toFixed(3));
    x1 = a + Math.pow(r, 2) * (b - a);
    console.log("x1 = " + x1.toFixed(3));
    y1 = (Math.pow(x1, 3) - 3 * x1 + 3);
    console.log("y1 = " + y1.toFixed(3) + "\n\n\n");
}
else{
    a = x1;
    console.log("a = " + a.toFixed(3));
    x1 = x2;
    console.log("x1 = " + x1.toFixed(3));
    x2 = a + r * (b - a);
    console.log("x2 = " + x2.toFixed(3));
    y2 = (Math.pow(x2, 3) - 3 * x2 + 3);
    console.log("y2 = " + y2.toFixed(3) + "\n\n\n");
}

if( (b - a) > e ){

    if(y1 >= y2){
        b = x2;
        console.log("b = " + b.toFixed(3));
        x2 = x1;
        console.log("x2 = " + x2.toFixed(3));
        x1 = a + Math.pow(r, 2) * (b - a);
        console.log("x1 = " + x1.toFixed(3));
        y1 = (Math.pow(x1, 3) - 3 * x1 + 3);
        console.log("y1 = " + y1.toFixed(3) + "\n\n\n");
    }
    else{
        a = x1;
        console.log("a = " + a.toFixed(3));
        x1 = x2;
        console.log("x1 = " + x1.toFixed(3));
        x2 = a + r * (b - a);
        console.log("x2 = " + x2.toFixed(3));
        y2 = (Math.pow(x2, 3) - 3 * x2 + 3);
        console.log("y2 = " + y2.toFixed(3) + "\n\n\n");
    }

}
else{
    
    if(y1 > y2){
        console.log("x2 = " + x2.toFixed(3));
        console.log("y2 = " + y2.toFixed(3));
    }
    else{
        console.log("x1 = " + x1.toFixed(3));
        console.log("y1 = " + y1.toFixed(3));
    }

}