class SportShoes extends Shoes {
    madeIn: string;
    isLaces: boolean;
    private dateProduction: Date;
    imagePath: string = `./Store Items/11.jpg`;

    set update_dateProduction(prodDate: string) {
        var position1: number = prodDate.indexOf("/") + 1;
        var position2: number = prodDate.indexOf("/", position1) + 1;
        var year: number = parseInt(prodDate.substr(0, 4));
        var month: number = parseInt(prodDate.substr(position1, position2 - position1));
        var day: number = parseInt(prodDate.substr(position2, prodDate.length - position2));
         this.isValid(day, month, year);
        //document.write(`isValid = ${this.isValid(day, month, year)}`);
        this.dateProduction = new Date(year, month - 1, day);
    }

    get update_dateProduction(): string {
        return (this.dateProduction).toLocaleDateString();
    }

    daysInMonth(m: number, y: number): number {
        switch (m) {
            case 2:
                return ((y % 4 == 0 && y % 100) || y % 400 == 0) ? 29 : 28;
            case 4: case 6: case 8: case 10:
                return 30;
            case 1: case 3: case 5: case 7: case 9: case 11:
                return 31;
            default:
                throw new Error(`Error: Production Date`);
        }
    }

     isValid(d: number, m: number, y: number): boolean {
        return m >= 0 && m < 12 && d > 0 && d <= this.daysInMonth(m, y);
     }


    constructor(manuf: string, model: string, country: string, laces: boolean, prodDate: string) {
        super(manuf, model);
        this.madeIn = country;
        this.isLaces = laces;
        this.update_dateProduction = prodDate;
    }

    displayDetails(): void {
        document.write(`<strong>Sport Shoes:<br/> Manufacturer: </strong>${this.updateManufacturer}&nbsp&nbsp<strong> Model: </strong>${this.updateModel}<br/>`);
        if (this._colorShoes == "White") {
            document.write(`<strong>Color:</strong>${this._colorShoes}<br/>`);
        } else document.write(`<strong>Color:</strong><font color=${this._colorShoes}>${this._colorShoes}</font><br/>`);
        document.write(`<strong>Price: </strong>${this.update_priceShoes}<br/><strong>Size: </strong>${this._sizeShoes}<br/><strong>Made in: </strong>${this.madeIn}<br/>
                    <strong>Is laces? </strong>${this.isLaces}<br/><strong>Production date: </strong>${this.update_dateProduction}<br/>`);
    }

    displayImage(): void {
        let str = `<br><img src="${this.imagePath}"/><br>`;
        document.write(str);
    }
}