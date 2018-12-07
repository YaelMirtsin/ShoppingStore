class ButtonedShirt extends Shirt {
    numButtons: number;
    imagePath: string = `./Store Items/02.jpg`;

    set updateNumButtons(numButtons: number) {
        if (numButtons > 0) {
            this.numButtons = numButtons;
        }
        else throw (alert(`Error: Wrong number of buttons!!!`));
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
        document.write(`<strong>Price: </strong>${this.update_price}<br/><strong>Number of buttons: </strong>${this.numButtons}<br/>`);
    }
    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}