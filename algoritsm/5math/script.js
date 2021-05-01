let a = 2;
let b = 3;
let n = 12;
let E = 0.0050;

let i = 0;

let h = (b - a) / n;
console.log("h = " + h.toFixed(2));

let x = a + h;
console.log("x = " + x.toFixed(2));

i = Math.sqrt(1 + x) / Math.log(x);
console.log("i = " + i.toFixed(2));

for(x = a + h; x <= (b-h); h++){
    i = i + Math.sqrt(1 + x) / Math.log(x);
    console.log("i_n = " + i.toFixed(2));
}

i = i + h * ( (Math.sqrt(1 + a) / Math.log(a)) + Math.sqrt(1 + b) / Math.log(b) ) / 2;
console.log("i_f(a) + f(b) = " + i.toFixed(2));

if( Math.abs(i*(h/2) - i*h) / 3 < E ){
   console.log("i_2 = " + i);
}
else{
    i = Math.sqrt(1 + x) / Math.log(x);
    // console.log("i = " + i.toFixed(2));

    for(x = a + h; x <= (b-h); h++){
        i = i + Math.sqrt(1 + x) / Math.log(x);
        // console.log("i_n = " + i.toFixed(2));   
    }

    i = i + h * ( (Math.sqrt(1 + a) / Math.log(a)) + Math.sqrt(1 + b) / Math.log(b) ) / 2;
    console.log("i_f(a) + f(b) = " + i.toFixed(2));
}













// if(i > E){
//     console.log("i більше за E");
// }
// else{
//     console.log("i менше за E");
// };











