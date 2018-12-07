class TopHat extends Accessories {
    colorTopHat: string;
    diameter: number;
    highTopHat: number;
    imagePath: string = `./Store Items/17.jpg`;

    constructor(manuf: string, model: string, color: string, diameter: number, high:number,) {
        super(manuf, model);
        this.colorTopHat = color;
        this.diameter = diameter;
        this.highTopHat = high;
    }

    displayDetails(): void {
        document.write(`<strong>Top Hat:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this.colorTopHat == "White") {
            document.write(`<strong>Color:</strong>${this.colorTopHat}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this.colorTopHat}>${this.colorTopHat}</font><br/>`);
        document.write(`<strong>Price: </strong>${this._price}<br/><strong>Size of hat: </strong>${this.diameter}<br/>
                        <strong> High: </strong>${this.highTopHat}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}