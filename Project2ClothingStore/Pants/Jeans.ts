class Jeans extends Pants {
    imagePath: string = `./Store Items/04.jpg`;
    priceJeans: number;
    sizeJeans: number;
    lengthOfJeans: number;
    isRipped: boolean;

    constructor(manuf: string, model: string, price: number, size: number, length: number, ripped: boolean) {
        super(manuf, model);
        this.priceJeans = price;
        this.sizeJeans = size;
        this.lengthOfJeans = length;
        this.isRipped = ripped;
    }

    getPriceWithoutVat(): number {
        return this.priceJeans - (this.priceJeans / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>Jeans:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>
                        <strong>Price: </strong>${this.priceJeans}<br/>`);
        if (this._colorPants == "White") {
            document.write(`<strong>Color:</strong>${this._colorPants}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorPants}>${this._colorPants}</font><br/>`);
        document.write(`<strong>Length of Jeans: </strong>${this.lengthOfJeans}<br/><strong>Is Jeans ripped: </strong>${this.isRipped}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}