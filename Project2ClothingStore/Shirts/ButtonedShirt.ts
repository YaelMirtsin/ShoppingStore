class ButtonedShirt extends Shirt {
   private numButtons: number;
    imagePath: string = `./Store Items/02.jpg`;

    set updateNumButtons(numButtons: number) {
        if (numButtons >= this.randomClass.minButtons && numButtons <= this.randomClass.maxButtons) {
            this.numButtons = numButtons;
        }
        else throw new Error("Parameter must be between " + this.randomClass.minButtons + " and " + this.randomClass.maxButtons );
    }

    get updateNumButtons(): number {
        return this.numButtons;
    }

    constructor(manuf: string, model: string, buttons: number) {
        super(manuf, model);
        this.updateNumButtons = buttons;
    }

    displayDetails(): void {
        document.write(`<strong>Buttoned Shirt:<br/>Manufacturer:</strong> ${this.updateManufacturer} &nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_price.toFixed(2)}<br/><strong>Number of buttons: </strong>${this.updateNumButtons}<br/>`);
    }
    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}