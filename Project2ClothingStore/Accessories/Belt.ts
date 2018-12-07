class Belt extends Accessories {
    _colorBelt: string;
    _priceBelt: number;
    colorBuckle: string;
    materialBuckle: string;
    dimensionsBelt: Dimensions = new Dimensions();
    randomClass: RandomHelper = new RandomHelper();
    imagePath: string = `./Store Items/18.jpg`;

    constructor(manuf: string, model: string, color: string, price: number, color_buckle: string, material_buckle: string,
                    heightBelt:number, lengthBelt:number, widthBelt:number) {
        super(manuf, model);
        this._colorBelt = color;
        this._priceBelt = price;
        this.colorBuckle = color_buckle;
        this.materialBuckle = material_buckle;
        this.dimensionsBelt.updateHeight = heightBelt;
        this.dimensionsBelt.updateLength = lengthBelt;
        this.dimensionsBelt.updateWidth = widthBelt;
    }
    getPriceWithoutVat(): number {
        return this._priceBelt - (this._priceBelt / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>Belt: <br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._colorBelt == "White" || this._colorBelt == "white" ) {
            document.write(`<strong>Color:</strong>${this._colorBelt}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorBelt}>${this._colorBelt}</font><br/>`);
        document.write(`<strong>Price: </strong>${this._priceBelt}<br/>
                        <strong>Buckle: </strong>color ${this.colorBuckle}&nbsp&nbsp material ${this.materialBuckle}<br/>
                        <strong>Belt: </strong>&nbsp Height= ${this.dimensionsBelt.updateHeight}&nbsp Length= ${this.dimensionsBelt.updateLength}&nbsp 
                        Width= ${this.dimensionsBelt.updateWidth}mm<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}