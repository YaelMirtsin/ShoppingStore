class EveningDress extends DressSkirts {
    sizeEvDress: number;
    waistEvDress: number;
    lengthEvDress: number;
    openBackEvDress: boolean;
    imagePath: string = `./Store Items/09.jpg`;

    constructor(manuf: string, model: string, size: number, waist: number, lenDress: number, back: boolean) {
        super(manuf, model);
        this.sizeEvDress = size;
        this.waistEvDress = waist;
        this.lengthEvDress = lenDress;
        this.openBackEvDress = back;
    }

    displayDetails(): void {
        document.write(`<strong>Evening Dress:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);
        document.write(`<strong>Price: </strong>${this._priceDressSkirt}<br/><strong>Size: </strong>${this.sizeEvDress}<br/>
                        <strong>Waist: </strong>${this.waistEvDress}<br/><strong>OpenBack: </strong>${this.openBackEvDress}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}