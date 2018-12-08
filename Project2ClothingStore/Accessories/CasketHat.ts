class CasketHat extends Accessories {
    private priceHat: number;
    colorCasketHat: string;
    private diameter: number;
    printAdvertisement:boolean; 
    imagePath: string = `./Store Items/16.jpg`;

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

    constructor(manuf: string, model: string, price:number, color: string, diameter: number, adertisement: boolean) {
        super(manuf, model);
        this.update_priceHat = price;
        this.update_diameter = diameter;
        this.printAdvertisement = adertisement;
        this.colorCasketHat = color;
    }

    getPriceWithoutVat(): number {
        return this.update_priceHat - (this.update_priceHat / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>Casket Hat:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this.colorCasketHat == "White") {
            document.write(`<strong>Color:</strong>${this.colorCasketHat}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this.colorCasketHat}>${this.colorCasketHat}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_priceHat}<br/><strong>Size of hat: </strong>${this.update_diameter}<br/>
                        <strong> Is print the advertisement? </strong>${this.printAdvertisement}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}