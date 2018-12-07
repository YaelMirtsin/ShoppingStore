class Jacket extends JacketCoat {
    thickness_of_fabric: number;
    num_of_pockets: number;
    imagePath: string = `./Store Items/14.jpg`;

    constructor(manuf: string, model: string, size_thickness: number, pockets: number) {
        super(manuf, model);
        this.thickness_of_fabric = size_thickness;
        this.num_of_pockets = pockets;
    }
    
    displayDetails(): void {
        document.write(`<strong>Jacket:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>
                        <strong>Price: </strong>${this._price}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);
        document.write(`<strong>Thickness of fabric: </strong>${this.thickness_of_fabric}<br/><strong> Number of pockets: </strong>${this.num_of_pockets}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}