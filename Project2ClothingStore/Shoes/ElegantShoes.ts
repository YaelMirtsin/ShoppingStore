class ElegantShoes extends Shoes {
    madeIn: string;
    isLaces: boolean;
    typeOfMaterial: string;
    imagePath: string = `./Store Items/10.jpg`;

    constructor(manuf: string, model: string, country: string, laces: boolean, material: string) {
        super(manuf, model);
        this.madeIn = country;
        this.isLaces = laces;
        this.typeOfMaterial = material;
    }

    displayDetails(): void {
        document.write(`<strong>Elegant Shoes:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._colorShoes == "White") {
            document.write(`<strong>Color:</strong>${this._colorShoes}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorShoes}>${this._colorShoes}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_priceShoes}<br/><strong>Size: </strong>${this._sizeShoes}<br/><strong>Made in: </strong>${this.madeIn}<br/>
                    <strong>Is laces? </strong>${this.isLaces}<br/><strong>Type of material: </strong>${this.typeOfMaterial}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}