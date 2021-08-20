import {Convert} from './convert.js';

const btnChangeBg = document.getElementById('change-bg');

btnChangeBg.addEventListener('click', () => {
    const hexValue = document.getElementById('hex-color').value;
    const body = document.body;

    body.style.backgroundColor = hexValue
});