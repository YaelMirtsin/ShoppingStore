class Trouser extends Pants {
    pricePants: number;
    sizePants: number;
    lengthOfTrouser: number;
    numOfPockets: number;
    imagePath: string = `./Store Items/05.jpg`;

    constructor(manuf: string, model: string, price: number, size: number, length: number, pockets: number) {
        super(manuf, model);
        this.sizePants = size;
        this.lengthOfTrouser = length;
        this.numOfPockets = pockets;
        this.pricePants = price;
    }

    getPriceWithoutVat(): number {
        return this.pricePants - (this.pricePants / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>Trouser :<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>
                        <strong>Price: </strong>${this.pricePants}<br/>`);
        if (this._colorPants == "White") {
            document.write(`<strong>Color:</strong>${this._colorPants}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorPants}>${this._colorPants}</font><br/>`);
        document.write(`<strong>Length of Trouser: </strong>${this.lengthOfTrouser}<br/> <strong>Number of pockets: </strong>${this.numOfPockets}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}