abstract class Shirt extends Item {
    _size: number;
   private _price: number;
    _color: string;
   private lengthOfSleeves: number;
    randomClass: RandomHelper = new RandomHelper();

    set update_price(price: number) {
        if (price > this.randomClass.minShirtPrice && price < this.randomClass.maxShirtPrice)
            this._price = price;
        else throw new RangeError("Parameter must be between " + this.randomClass.minShirtPrice + " and " + this.randomClass.minShirtPrice );
    }
    get update_price(): number {
        return this._price;
    }
    
    set update_lengthOfSleeves(len_sleeve: number) {
        len_sleeve = 15;
        if (len_sleeve < this.randomClass.minLengthSleeveSize && len_sleeve > this.randomClass.maxLengthSleeveSize) {
            throw new Error("Parameter must be between " + " " + this.randomClass.minLengthSleeveSize + " and " + this.randomClass.maxLengthSleeveSize);
        } else this.lengthOfSleeves = len_sleeve;
    }

    get update_lengthOfSleeves(): number {
        return this.lengthOfSleeves;
    }

    constructor(manuf: string, model: string) {
        super(manuf, model);
        this._color = this.randomClass.getRandomColor();
        this.update_price = this.randomClass.getRandomPrice();
        this._size = this.randomClass.getRandomSize();
        this.update_lengthOfSleeves = this.randomClass.getRandomSleeveSize();
    }

    getPriceWithoutVat(): number {
        return this.update_price - (this.update_price / 100 * this.tax);
    }
}