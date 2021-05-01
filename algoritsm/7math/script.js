let e = 0.001;
console.log("e = " + e);
let a = -1;
console.log("a = " + a);
let b = 1;
console.log("b = " + b);

let x = (a+b) / 2;
console.log("x = " + x.toFixed(3));

let y = ( Math.pow(x, 3) / 3 ) - (2 * Math.pow(x, 2) ) + (3 * x) + 1;
console.log("y = " + y.toFixed(3));

if(y > e){

    x = (a+b) / 2;

    y = ( Math.pow(x, 3) / 3 ) - (2 * Math.pow(x, 2) ) + (3 * x) + 1;

    if(y == 0){
        console.log("X кінцеве = " + x.toFixed(3)); 
        console.log("F(x) = " + y.toFixed(3));
    }
    else if(y > 0){
        b = x;
        console.log("Звуження зі сторони b = " + b.toFixed(3) );
    }
    else{
        a = x;
        console.log( "Звуження зі сторони a = " + a.toFixed(3) );
    }

}
else{
    console.log("X кінцеве = " + x.toFixed(3)); 
    console.log("F(x) = " + y.toFixed(3));
}