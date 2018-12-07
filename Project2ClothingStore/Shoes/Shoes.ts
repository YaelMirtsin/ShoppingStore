abstract class Shoes extends Item {
    _sizeShoes: number;
    private _priceShoes: number;
    _colorShoes: string;
    randomClass: RandomHelper = new RandomHelper();

    set update_priceShoes(price: number) {
        if (price > this.randomClass.minShoesPrice && price < this.randomClass.maxShoesPrice)
            this._priceShoes = price;
        else throw new RangeError(`Parameter must be between ${this.randomClass.minShoesPrice} and ${this.randomClass.maxShoesPrice}`);
    }
    get update_priceShoes(): number {
        return this._priceShoes;
    }
    constructor(manuf: string, model: string) {
        super(manuf, model);
        this._sizeShoes = this.randomClass.getRandomShoesSize();
        this._colorShoes = this.randomClass.getRandomShoesColor();
        this.update_priceShoes = this.randomClass.getRandomShoesPrice();

    }
    getPriceWithoutVat(): number {
        return this.update_priceShoes - (this.update_priceShoes / 100 * this.tax);
    }
}