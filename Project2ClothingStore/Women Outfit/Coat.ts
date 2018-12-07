class Coat extends JacketCoat {
    thickness_of_fabric: number;
    isRainCoat: boolean;
    imagePath: string = `./Store Items/15.jpg`;

    constructor(manuf: string, model: string, size_thickness: number, isRain: boolean) {
        super(manuf, model);
        this.thickness_of_fabric = size_thickness;
        this.isRainCoat = isRain;
    }
   
    displayDetails(): void {
        document.write(`<strong>Jacket:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);
        document.write(`<strong>Price: </strong>${this._price}<br/><strong>Thickness of fabric: </strong>${this.thickness_of_fabric}<br/><strong> Is rain coat? </strong>${this.isRainCoat}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}