class SunGlasses extends Accessories {
    priceSunGlass: number;
    colorFrame: string;
    colorGlass: string;

    randomClass: RandomHelper = new RandomHelper();
    imagePath: string = `./Store Items/19.jpg`;

    constructor(manuf: string, model: string, price: number, color_frame: string, color_glass:string ) {
        super(manuf, model);
        this.priceSunGlass = price;
        this.colorFrame = color_frame;
        this.colorGlass = color_glass;
    }


    getPriceWithoutVat(): number {
        return this.priceSunGlass - (this.priceSunGlass / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>SunGlasses: <br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        document.write(`<strong>Price: </strong>${this.priceSunGlass}<br/><strong>Color of the frame: </strong>${this.colorFrame}<br/>
                        <strong>Color of the glass: </strong>${this.colorGlass}<br/>`);
    }
       
    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}