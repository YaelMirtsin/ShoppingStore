class Belt extends Accessories {
    _colorBelt: string;
    private _priceBelt: number;
    private colorBuckle: string;
    materialBuckle: string;
    dimensionsBelt: Dimensions = new Dimensions();
    randomClass: RandomHelper = new RandomHelper();
    imagePath: string = `./Store Items/18.jpg`;

    set update_priceBelt(price: number) {
        if (price >= this.randomClass.minBeltPrice && price <= this.randomClass.maxBeltPrice)
            this._priceBelt = price;
        else throw new RangeError("Parameter must be between " + this.randomClass.minBeltPrice + " and " + this.randomClass.minBeltPrice);
    }
    get update_priceBelt(): number {
        return this._priceBelt;
    }    
 
    set update_colorBuckle(color: string) {
        this.colorBuckle = color;
    }
    get update_colorBuckle(): string {
        return this.colorBuckle;
    }

    constructor(manuf: string, model: string, color: string, price: number, color_buckle: string, material_buckle: string,
                    heightBelt:number, lengthBelt:number, widthBelt:number) {
        super(manuf, model);
        this._colorBelt = color;
        this.update_priceBelt = price;
        this.update_colorBuckle = color_buckle;
        this.materialBuckle = material_buckle;
        this.dimensionsBelt.updateHeight = heightBelt;
        this.dimensionsBelt.updateLength = lengthBelt;
        this.dimensionsBelt.updateWidth = widthBelt;
    }
    getPriceWithoutVat(): number {
        return this.update_priceBelt - (this.update_priceBelt / 100 * this.tax);
    }

    getColorBuckle(): string {
        return this.update_colorBuckle;
    }

    displayDetails(): void {
        document.write(`<strong>Belt: <br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._colorBelt == "White" || this._colorBelt == "white" ) {
            document.write(`<strong>Color:</strong>${this._colorBelt}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorBelt}>${this._colorBelt}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_priceBelt.toFixed(2)}<br/>
                        <strong>Buckle: </strong>color ${this.update_colorBuckle}&nbsp&nbsp <strong>Material: </strong>${this.materialBuckle}<br/>
                        <strong>Belt: </strong>&nbsp Height= ${this.dimensionsBelt.updateHeight}&nbsp Length= ${this.dimensionsBelt.updateLength}&nbsp 
                        Width= ${this.dimensionsBelt.updateWidth}mm<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}