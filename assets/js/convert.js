class Convert {

    #temp;
    #result;

    constructor() {
        this.#temp = 0;
        this.#result = 0;
    }

    result(value, fromTemp, toTemp){
        const valueNum = Math.floor(value)
        switch (fromTemp) {
            case "celcius":
                this.#result = this.#fromCelcius(toTemp, valueNum);
                break;
            case "reamur":
                this.#result = this.#fromReamur(toTemp, valueNum);
                break;
            case "fahrenheit":
                this.#result = this.#fromfahrenheit(toTemp, valueNum);
                break;
            case "kelvin":
                this.#result = this.#fromKelvin(toTemp, valueNum);
                break;
            default:
                this.#result = 0;
        }

        return this.#result;
    }

    #fromCelcius(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this.#temp = value;
                break;
            case "reamur":
                this.#temp = (4 / 5) * value;
                break;
            case "fahrenheit":
                this.#temp = (9 / 5) * value + 32;
                break;
            case "kelvin":
                this.#temp = value + 273.15;
                break;
            default:
                this.#temp = 0;
        }

        return this.#temp;
    }

    #fromReamur(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this.#temp = (5 / 4) * value;
                break;
            case "reamur":
                this.#temp = value;
                break;
            case "fahrenheit":
                this.#temp = (9 / 4) * value + 32;
                break;
            case "kelvin":
                this.#temp = (5 / 4) * value + 273.15;
                break;
            default:
                this.#temp = 0;
        }

        return this.#temp;
    }

    #fromfahrenheit(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this.#temp = 5/9 * (value - 32);
                break;
            case "reamur":
                this.#temp = 4/9 * (value - 32);
                break;
            case "fahrenheit":
                this.#temp = value;
                break;
            case "kelvin":
                this.#temp = 5/9 * (value - 32) + 273.15;
                break;
            default:
                this.#temp = 0;
        }

        return this.#temp;
    }

    #fromKelvin(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this.#temp = value - 273.15;
                break;
            case "reamur":
                this.#temp = 4/5 * (value - 273.15);
                break;
            case "fahrenheit":
                this.#temp = 9/5 * (value - 273.15) + 32;
                break;
            case "kelvin":
                this.#temp = value;
                break;
            default:
                this.#temp = 0;
        }

        return this.#temp;
    }
}

//export class Convert
// export default Convert;
module.exports = Convert;
