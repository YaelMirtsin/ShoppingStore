abstract class Accessories extends Item {
    _size: number;
    _price: number;
    randomClass: RandomHelper = new RandomHelper();

    constructor(manuf: string, model: string) {
        super(manuf, model);
        this._size = this.randomClass.getRandomSize();
        this._price = this.randomClass.getRandomPrice();
    }

    getPriceWithoutVat(): number {
        return this._price - (this._price / 100 * this.tax);
    }
}