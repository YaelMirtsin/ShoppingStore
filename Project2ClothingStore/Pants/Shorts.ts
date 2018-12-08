class Shorts extends Pants {
    priceShorts: number;
    sizeShorts: number;
    lengthOfShorts: number;
    material: string;
    imagePath: string = `./Store Items/06.jpg`;

    constructor(manuf: string, model: string, price: number, size: number, length: number, material: string) {
        super(manuf, model);
        this.priceShorts = price;
        this.sizeShorts = size;
        this.lengthOfShorts = length;
        this.material = material;
    }
    getPriceWithoutVat(): number {
        return this.priceShorts - (this.priceShorts / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>Shorts:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>
                        <strong>Price: </strong>${this.priceShorts}<br/>`);
        if (this._colorPants == "White") {
            document.write(`<strong>Color:</strong>${this._colorPants}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorPants}>${this._colorPants}</font><br/>`);
        document.write(`<strong> Length of shorts: </strong>${this.lengthOfShorts}<br/><strong> Material: </strong>${this.material}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}