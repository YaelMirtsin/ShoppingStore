abstract class DressSkirts extends Item {
    _priceDressSkirt: number;
    _color: string;
    randomClass: RandomHelper = new RandomHelper();

    constructor(manuf: string, model: string) {
        super(manuf, model);
        this._color = this.randomClass.getRandomColor();
        this._priceDressSkirt = this.randomClass.getRandomDressSkirtPrice();

    }
    getPriceWithoutVat(): number {
        return this._priceDressSkirt - (this._priceDressSkirt / 100 * this.tax);
    }
}