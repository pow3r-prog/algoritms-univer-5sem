const x = document.querySelector('#valueX');
const poxidna = document.querySelector('#valuePoxidna');
const findButton = document.querySelector('#resultButton');
const resultFunc = document.querySelector('#resultFunction');
const resultAPoxub = document.querySelector('#resultAPoxubka');
const resultVPoxub = document.querySelector('#resultVPoxubka');

findButton.addEventListener('click', () => {
    let findFunc = Math.pow((x.value), 4) -1.12*x.value + 1/3;
    let findAbsolutna = Math.abs(findFunc - poxidna.value);
    let findVidnosna = findAbsolutna / Math.abs(poxidna.value);
    if(x.value == 0 || poxidna.value == 0) {
        resultFunc.innerHTML = 'Заповніть поля!'
    }
    else {
        resultFunc.innerHTML = findFunc;
        resultAPoxub.innerHTML = findAbsolutna;
        resultVPoxub.innerHTML = findVidnosna;
    }
});
