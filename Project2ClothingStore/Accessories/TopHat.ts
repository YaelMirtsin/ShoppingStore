class TopHat extends Accessories {
    private priceHat: number;
    colorTopHat: string;
    private diameter: number;
    highTopHat: number;
    imagePath: string = `./Store Items/17.jpg`;

    set update_diameter(diameter: number) {
        if (diameter >= this.randomClass.minDiameterHat && diameter <= this.randomClass.maxDiameterHat)
            this.diameter = diameter;
        else throw new RangeError("Parameter must be between " + this.randomClass.minDiameterHat + " and " + this.randomClass.maxDiameterHat);
    }
    get update_diameter(): number {
        return this.diameter;
    }

    set update_priceHat(price: number) {
        if (price >= this.randomClass.minHatPrice && price <= this.randomClass.maxHatPrice)
            this.priceHat = price;
        else throw new RangeError("Parameter must be between " + this.randomClass.minHatPrice + " and " + this.randomClass.minHatPrice);
    }
    get update_priceHat(): number {
        return this.priceHat;
    }  

    constructor(manuf: string, model: string, price:number, color: string, diameter: number, high:number,) {
        super(manuf, model);
        this.update_priceHat = price;
        this.colorTopHat = color;
        this.diameter = diameter;
        this.highTopHat = high;
    }

     

    getPriceWithoutVat(): number {
        return this.update_priceHat - (this.update_priceHat / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>Top Hat:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this.colorTopHat == "White") {
            document.write(`<strong>Color:</strong>${this.colorTopHat}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this.colorTopHat}>${this.colorTopHat}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_priceHat}<br/><strong>Size of hat: </strong>${this.update_diameter}<br/>
                        <strong> High: </strong>${this.highTopHat}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}