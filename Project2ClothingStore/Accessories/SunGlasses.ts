class SunGlasses extends Accessories {
   private priceSunGlass: number;
    colorFrame: string;
    colorGlass: string;
    randomClass: RandomHelper = new RandomHelper();
    imagePath: string = `./Store Items/19.jpg`;

    set update_priceSunGlass(price: number) {
        if (price > this.randomClass.minSunGlassesPrice && price < this.randomClass.maxSunGlassesPrice)
            this.priceSunGlass = price;
        else throw new RangeError("Parameter must be between " + this.randomClass.minSunGlassesPrice + " and " + this.randomClass.maxSunGlassesPrice);
    }
    get update_priceSunGlass(): number {
        return this.priceSunGlass;
    }

    constructor(manuf: string, model: string, price: number, color_frame: string, color_glass:string ) {
        super(manuf, model);
        this.update_priceSunGlass = price;
        this.colorFrame = color_frame;
        this.colorGlass = color_glass;
    }


    getPriceWithoutVat(): number {
        return this.update_priceSunGlass - (this.update_priceSunGlass / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>SunGlasses: <br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        document.write(`<strong>Price: </strong>${this.update_priceSunGlass.toFixed(2)}<br/><strong>Color of the frame: </strong>${this.colorFrame}<br/>
                        <strong>Color of the glass: </strong>${this.colorGlass}<br/>`);
    }
       
    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}