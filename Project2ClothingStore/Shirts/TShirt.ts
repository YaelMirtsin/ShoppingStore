class TShirt extends Shirt {
    private theCaptionOnTheShirt: string = null;
    imagePath: string = `./Store Items/01.jpg`;

    set updateCaptionOfShirt(theCaptionOnTheShirt: string) {
        this.theCaptionOnTheShirt = theCaptionOnTheShirt;
    }

    get updateCaptionOfShirt(): string {
        return this.theCaptionOnTheShirt;
    }

    constructor(manuf: string, model: string, caption: string) {
        super(manuf, model);
        this.updateCaptionOfShirt = caption;
    }

    displayDetails(): void {
        document.write(`<strong>T-Shirt:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._color == "White") {
            document.write(`<strong>Color:</strong>${this._color}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._color}>${this._color}</font><br/>`);

        document.write(`<strong>Price: </strong>${this.update_price}<br/><strong>Caption of the shirt: </strong>${this.updateCaptionOfShirt}<br/>`);
        
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}