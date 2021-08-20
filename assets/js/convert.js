class Convert {
    constructor() {
        this._temp = 0;
    }

    fromCelcius(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this._temp = value;
                break;
            case "reamur":
                this._temp = (4 / 5) * value;
                break;
            case "farenheit":
                this._temp = (9 / 5) * value + 32;
                break;
            case "kelvin":
                this._temp = value + 273;
                break;
            default:
                this._temp = 0;
        }

        return this._temp;
    }

    fromReamur(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this._temp = (5 / 4) * value;
                break;
            case "reamur":
                this._temp = value;
                break;
            case "farenheit":
                this._temp = (9 / 4) * value + 32;
                break;
            case "kelvin":
                this._temp = (5 / 4) * value + 273;
                break;
            default:
                this._temp = 0;
        }

        return this._temp;
    }

    fromFarenheit(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this._temp = 5/9 * (value - 32);
                break;
            case "reamur":
                this._temp = 4/9 * (value - 32);
                break;
            case "farenheit":
                this._temp = value;
                break;
            case "kelvin":
                this._temp = 5/9 * (value - 32) + 273;
                break;
            default:
                this._temp = 0;
        }

        return this._temp;
    }

    fromKelvin(toTemp, value) {
        switch (toTemp) {
            case "celcius":
                this._temp = value - 273;
                break;
            case "reamur":
                this._temp = 4/5 * (value - 273);
                break;
            case "farenheit":
                this._temp = 9/5 * (value - 273) + 32;
                break;
            case "kelvin":
                this._temp = value;
                break;
            default:
                this._temp = 0;
        }

        return this._temp;
    }
}

export { Convert };
