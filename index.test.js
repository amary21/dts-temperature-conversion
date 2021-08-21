//import class Convert on index.test.js
// import Convert from './assets/js/convert.js';

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
