class Dress extends DressSkirts {
    sizeDress: number;
    waistDress: number;
    LengthDress: number;
    openBackDress: boolean;
    imagePath: string = `./Store Items/08.jpg`;

    constructor(manuf: string, model: string, size: number, waist: number, lenDress: number, back: boolean) {
        super(manuf, model);
        this.sizeDress = size;
        this.waistDress = waist;
        this.LengthDress = lenDress;
        this.openBackDress = back;
    }

    displayDetails(): void {
        document.write(`<strong>Dress:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);
        document.write(`<strong>Price:</strong>${this._priceDressSkirt}<br/>
                        <strong>Size: </strong>${this.sizeDress}<br/><strong>Waist: </strong>${this.waistDress}<br/>
                        <strong> OpenBack: </strong>${this.openBackDress}<br/>`);

    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}