abstract class JacketCoat extends Item {
    _size: number;
    _price: number;
    _color: string;
    randomClass: RandomHelper = new RandomHelper();

    constructor(manuf: string, model: string) {
        super(manuf, model);
        this._size = this.randomClass.getRandomSize();
        this._color = this.randomClass.getRandomColor();
        this._price = this.randomClass.getRandomPrice();

    }
    getPriceWithoutVat(): number {
        return this._price - (this._price / 100 * this.tax);
    }

    abstract displayDetails(): void;
    abstract displayImage(): void;
}