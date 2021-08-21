//import class Convert on main.js
// import Convert from './convert.js';

const convert = new Convert();

const btnChangeBg = document.getElementById('change-bg');
const inputValue = document.getElementById('input-value');
const resultValue = document.getElementById('result-value');
const fromTemp = document.getElementById('from-temp');
const toTemp = document.getElementById('to-temp');

const changeBackground = () => {
    const hexValue = document.getElementById('hex-color').value;
    const body = document.body;
    body.style.backgroundColor = hexValue
}

const changeTemp = () => {
    const result = convert.result(inputValue.value, fromTemp.value, toTemp.value);
    resultValue.innerHTML = result;
}

btnChangeBg.addEventListener('click', changeBackground);
inputValue.addEventListener('keyup', changeTemp);
fromTemp.addEventListener('change', changeTemp);
toTemp.addEventListener('change', changeTemp);
