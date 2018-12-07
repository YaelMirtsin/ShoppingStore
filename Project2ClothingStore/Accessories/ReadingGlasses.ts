class ReadingGlasses extends Accessories {
    priceReadingGlass: number;
    colorFrame: string;
    distanceForReading: number;

    randomClass: RandomHelper = new RandomHelper();
    imagePath: string = `./Store Items/20.jpg`;

    constructor(manuf: string, model: string, price: number, color_frame: string, distance: number) {
        super(manuf, model);
        this.priceReadingGlass = price;
        this.colorFrame = color_frame;
        this.distanceForReading  = distance;
    }


    getPriceWithoutVat(): number {
        return this.priceReadingGlass - (this.priceReadingGlass / 100 * this.tax);
    }

    displayDetails(): void {
        document.write(`<strong>Reading Glasses: <br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        document.write(`<strong>Price: </strong>${this.priceReadingGlass}<br/><strong>Color of the frame: </strong>${this.colorFrame}<br/>
                        <strong>Distance is recommended for reading: </strong>${this.distanceForReading}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}