class WomenShirts extends Shirt {
    typeOfMaterial: string;
    imagePath: string = `./Store Items/03.jpg`;


    constructor(manuf: string, model: string, material: string) {
        super(manuf, model);
        this.typeOfMaterial = material;
    }

    displayDetails(): void {
        document.write(`<strong>Women's Shirt: <br/> Manufacturer: </strong>${this.updateManufacturer} &nbsp&nbsp<strong>Model: </strong>${this.updateModel}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_price}<br/><strong>Material: </strong>${this.typeOfMaterial}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}