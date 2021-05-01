let a = 0.8;
let b = 0.6;
let n = 18;
let e = 0.0010;

let i = 0;

let h = (b - a) / n;
console.log("h = " + h.toFixed(2));

let x = a;
console.log("a = " + x);

i = i + 1/Math.sqrt(2 * Math.pow(x, 3) + 1.5) * h;
console.log("i = " + i.toFixed(2));

x1 = x + h;
console.log(x1);

if (x1 > b) {
    console.log("шуканий інтервал дорівнює "  + x1.toFixed(2));
}
else {
    console.log(i);
}



// let h = (b - a) / n;
// console.log("h = " + h.toFixed(2));

// let i2 = h * (a + b) / 2;
// console.log("i2 = " + i2.toFixed(2));

// n = 2 * n;
// h = h / 2;
// i1 = i2; 
// i2 = 0;

// for(x = a; b - h; h++) {
//     i2 = i2 + 1/Math.sqrt(2 * Math.pow(x, 3) + 1.5);
//     console.log("i2 = " + i2.toFixed(2));
// }

// i2 = i2 * h;

// if(Math.abs(i2-i1) / 3 < e) {
//     console.log("i2 = " + i2);
// }