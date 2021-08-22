//import class Convert on index.test.js
// import Convert from './assets/js/convert.js';

/*
skema pengujian:
~ convert 12º celcius ke reamur = 9.600000000000001º ?
~ convert 12º celcius ke fahrenheit = 53.6º ?
~ convert 12º celcius ke kelvin = 285.15º ?
~ convert 12º reamur ke celcius = 15º ?
~ convert 12º reamur ke fahrenheit = 59º ?
~ convert 12º reamur ke kelvin = 288.15º ?
~ convert 12º fahrenheit ke celcius = -11.11111111111111º ?
~ convert 12º fahrenheit ke reamur = -8.88888888888889º ?
~ convert 12º fahrenheit ke kelvin = 262.0388888888889º ?
~ convert 12º kelvin ke celcius = -261.15º ?
~ convert 12º kelvin ke reamur = -208.92º ?
~ convert 12º kelvin ke fahrenheit = -438.07º ?
*/


const Convert = require('./assets/js/convert.js');

const convert = new Convert();
const celcius = "celcius";
const reamur = "reamur";
const fahrenheit = "fahrenheit";
const kelvin = "kelvin";
const inputValue = 12;

test("celcius => reamur", () => {
    expect(convert.result(inputValue, celcius, reamur)).toBe(9.600000000000001);
});

test("celcius => fahrenheit", () => {
    expect(convert.result(inputValue, celcius, fahrenheit)).toBe(53.6);
});

test("celcius => kelvin", () => {
    expect(convert.result(inputValue, celcius, kelvin)).toBe(285.15);
});

test("reamur => celcius", () => {
    expect(convert.result(inputValue, reamur, celcius)).toBe(15);
});

test("reamur => fahrenheit", () => {
    expect(convert.result(inputValue, reamur, fahrenheit)).toBe(59);
});

test("reamur => kelvin", () => {
    expect(convert.result(inputValue, reamur, kelvin)).toBe(288.15);
});

test("fahrenheit => celcius", () => {
    expect(convert.result(inputValue, fahrenheit, celcius)).toBe(-11.11111111111111);
});

test("fahrenheit => reamur", () => {
    expect(convert.result(inputValue, fahrenheit, reamur)).toBe(-8.88888888888889);
});

test("fahrenheit => kelvin", () => {
    expect(convert.result(inputValue, fahrenheit, kelvin)).toBe(262.0388888888889);
});

test("kelvin => celcius", () => {
    expect(convert.result(inputValue, kelvin, celcius)).toBe(-261.15);
});

test("kelvin => reamur", () => {
    expect(convert.result(inputValue, kelvin, reamur)).toBe(-208.92);
});

test("kelvin => fahrenheit", () => {
    expect(convert.result(inputValue, kelvin, fahrenheit)).toBe(-438.07);
});
