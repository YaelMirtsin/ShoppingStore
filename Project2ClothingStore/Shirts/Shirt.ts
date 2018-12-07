abstract class Shirt extends Item {
    _size: number;
   private _price: number;
    _color: string;
   private lengthOfSleeves: number;
    randomClass: RandomHelper = new RandomHelper();

    set update_price(price: number) {
        if (price > this.randomClass.minShirtPrice && price < this.randomClass.maxShirtPrice)
            this._price = price;
        else throw new RangeError("Parameter must be between " + this.randomClass.minShirtPrice + " and " + this.randomClass.maxShirtPrice );
    }
    get update_price(): number {
        return this._price;
    }

    set update_size(size: number) {
        if (size > this.randomClass.minShirtSize && size < this.randomClass.maxShirtSize)
            this._price = size;
        else throw new RangeError("Parameter must be between " + this.randomClass.minShirtSize + " and " + this.randomClass.maxShirtSize);
    }
    get update_size(): number {
        return this._size;
    }

    set update_lengthOfSleeves(len_sleeve: number) {
        if ((len_sleeve > this.randomClass.minLengthSleeveSize) && (len_sleeve < this.randomClass.maxLengthSleeveSize)) {
            this.lengthOfSleeves = len_sleeve;
        } else {
            var str: string = "Parameter must be between " + " " + this.randomClass.minLengthSleeveSize + " and " + this.randomClass.maxLengthSleeveSize;
            throw new Error(str);
        }
    }

    get update_lengthOfSleeves(): number {
        return this.lengthOfSleeves;
    }

    constructor(manuf: string, model: string) {
        super(manuf, model);
        this._color = this.randomClass.getRandomColor();
        this.update_price = this.randomClass.getRandomPrice();
        this.update_size = this.randomClass.getRandomSize();
        this.update_lengthOfSleeves = this.randomClass.getRandomSleeveSize();
    }

    getPriceWithoutVat(): number {
        return this.update_price - (this.update_price / 100 * this.tax);
    }
}