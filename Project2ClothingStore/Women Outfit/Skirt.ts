class Skirt extends DressSkirts {
    sizeSkirt: number;
    waistSkirt: number;
    styleSkirt: string;
    imagePath: string = `./Store Items/07.jpg`;

    constructor(manuf: string, model: string, size: number, waist: number, style: string) {
        super(manuf, model);
        this.sizeSkirt = size;
        this.waistSkirt = waist;
        this.styleSkirt = style;
    }

    displayDetails(): void {
        document.write(`<strong>Skirt:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);
        document.write(`<strong>Price: </strong>${this._priceDressSkirt}<br/><strong>Size: </strong>${this.sizeSkirt}<br/><strong>Waist:</strong>${this.waistSkirt}<br/>`);
    }


    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}