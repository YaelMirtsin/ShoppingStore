var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shoes = (function (_super) {
    __extends(Shoes, _super);
    function Shoes(manuf, model) {
        var _this = _super.call(this, manuf, model) || this;
        _this.randomClass = new RandomHelper();
        _this._sizeShoes = _this.randomClass.getRandomShoesSize();
        _this._colorShoes = _this.randomClass.getRandomShoesColor();
        _this.update_priceShoes = _this.randomClass.getRandomShoesPrice();
        return _this;
    }
    Object.defineProperty(Shoes.prototype, "update_priceShoes", {
        get: function () {
            return this._priceShoes;
        },
        set: function (price) {
            if (price > this.randomClass.minShoesPrice && price < this.randomClass.maxShoesPrice)
                this._priceShoes = price;
            else
                throw new RangeError("Parameter must be between " + this.randomClass.minShoesPrice + " and " + this.randomClass.maxShoesPrice);
        },
        enumerable: true,
        configurable: true
    });
    Shoes.prototype.getPriceWithoutVat = function () {
        return this.update_priceShoes - (this.update_priceShoes / 100 * this.tax);
    };
    return Shoes;
}(Item));
//# sourceMappingURL=Shoes.js.map