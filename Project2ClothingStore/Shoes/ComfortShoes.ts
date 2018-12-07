class ComfortShoes extends Shoes {
    madeIn: string;
    isLaces: boolean;
    isInsole: boolean;
    imagePath: string = `./Store Items/12.jpg`;

    constructor(manuf: string, model: string, country: string, laces: boolean, insole: boolean) {
        super(manuf, model);
        this.madeIn = country;
        this.isLaces = laces;
        this.isInsole = insole;
    }

    displayDetails(): void {
        document.write(`<strong>Comfort Shoes:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._colorShoes == "White") {
            document.write(`<strong>Color:</strong>${this._colorShoes}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorShoes}>${this._colorShoes}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_priceShoes}<br/><strong>Size: </strong>${this._sizeShoes}<br/><strong>Made in: </strong>${this.madeIn}<br/>
                    <strong>Is laces? </strong>${this.isLaces}<br/><strong>Is Insole?: </strong>${this.isInsole}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}