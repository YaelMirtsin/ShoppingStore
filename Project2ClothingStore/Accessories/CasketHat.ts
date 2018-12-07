class CasketHat extends Accessories {
    colorCasketHat: string;
    diameter: number;
    printAdvertisement:boolean; 
    imagePath: string = `./Store Items/16.jpg`;

    constructor(manuf: string, model: string, color: string, diameter: number, adertisement: boolean) {
        super(manuf, model);
        this.diameter = diameter;
        this.printAdvertisement = adertisement;
        this.colorCasketHat = color;
    }

    displayDetails(): void {
        document.write(`<strong>Casket Hat:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this.colorCasketHat == "White") {
            document.write(`<strong>Color:</strong>${this.colorCasketHat}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this.colorCasketHat}>${this.colorCasketHat}</font><br/>`);
        document.write(`<strong>Price: </strong>${this._price}<br/><strong>Size of hat: </strong>${this.diameter}<br/>
                        <strong> Is print the advertisement? </strong>${this.printAdvertisement}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}