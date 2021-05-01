// var mat = [
//     [1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1]
//   ];
// console.log(mat);


// var a = [
//     [2], [3], [1], [4], [8], [6]
// ];
// var b = [
//     [1], [4], [3], [2], [1], [3]
// ]
// var aNum = Number(a[0]); 
// var bNum = Number(b[0]);
// var c = aNum + bNum;
// var c = aNum;
// var d = bNum;



// const result = () => {
//   if(aNum[0] + bNum[0] == 3) {
//     console.log('Nice');
//   }
//   else {
//     console.log('Bad');
//   }
// }
// console.log('result');

// function result2() {
//     var resultc = c;
//     var resultd = d;
//     for (result) {
//       result += num
//     }
//     return result
//   }

// for (let i = 0; i < a.length; i++) {
//     let c = a[i];
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     } 
// }




// ........................ #1 .................

let matrix8 = [
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
  ];
let outmatrix8 = '';

  for (let i = 0; i < matrix8.length; i++) {
    for (let k = 0; k < matrix8[i].length; k++) {
        console.log(matrix8[i][k]);
        outmatrix8 +=matrix8[i][k] + ' ';
    }   
    outmatrix8 +='<br>';
}


// ................... #2 ...................

let a = [
    [2, 3, 1],
    [4, 8, 6],
];
let b = [
    [1, 4, 3],
    [2, 1, 3],
];
let c = [
    [3, 7, 4],
    [6, 9, 9],
]
let f = [
    [1, 2, 1],
    [2, 4, 6],
    [4, 3, 1],
];
let outA = '';
let outB = '';
let outC1 = '';
let outC2 = '';
let outF = '';

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        console.log(a[i][k]);
        outA +=a[i][k] + ' ';
    }   
    outA +='<br>';
}
for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        console.log(b[i][k]);
        outB +=b[i][k] + ' ';
    }   
    outB +='<br>';
}
for (let i = 0; i < c.length; i++) {
    for (let k = 0; k < c[i].length; k++) {
        console.log(c[i][k]);
        outC1 +=c[i][k] + ' ';
    }   
    outC1 +='<br>';
}
for (let i = 0; i < c.length; i++) {
    for (let k = 0; k < c[i].length; k++) {
        console.log(c[i][k]);
        outC2 +=c[i][k] + ' ';
    }   
    outC2 +='<br>';
}
for (let i = 0; i < f.length; i++) {
    for (let k = 0; k < f[i].length; k++) {
        console.log(f[i][k]);
        outF +=f[i][k] + ' ';
    }   
    outF +='<br>';
}
document.querySelector('.outmatrix8').innerHTML = outmatrix8;
document.querySelector('.outA').innerHTML = outA;
document.querySelector('.outB').innerHTML = outB;
document.querySelector('.outC1').innerHTML = outC1;
document.querySelector('.outC2').innerHTML = outC2;
document.querySelector('.outF').innerHTML = outF;
