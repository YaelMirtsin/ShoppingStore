var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shirt = (function (_super) {
    __extends(Shirt, _super);
    function Shirt(manuf, model) {
        var _this = _super.call(this, manuf, model) || this;
        _this.randomClass = new RandomHelper();
        _this._color = _this.randomClass.getRandomColor();
        _this.update_price = _this.randomClass.getRandomPrice();
        _this._size = _this.randomClass.getRandomSize();
        _this.update_lengthOfSleeves = _this.randomClass.getRandomSleeveSize();
        return _this;
    }
    Object.defineProperty(Shirt.prototype, "update_price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            if (price > this.randomClass.minShirtPrice && price < this.randomClass.maxShirtPrice)
                this._price = price;
            else
                throw new RangeError("Parameter must be between " + this.randomClass.minShirtPrice + " and " + this.randomClass.minShirtPrice);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shirt.prototype, "update_lengthOfSleeves", {
        get: function () {
            return this.lengthOfSleeves;
        },
        set: function (len_sleeve) {
            len_sleeve = 15;
            if (len_sleeve < this.randomClass.minLengthSleeveSize && len_sleeve > this.randomClass.maxLengthSleeveSize) {
                throw new Error("Parameter must be between " + " " + this.randomClass.minLengthSleeveSize + " and " + this.randomClass.maxLengthSleeveSize);
            }
            else
                this.lengthOfSleeves = len_sleeve;
        },
        enumerable: true,
        configurable: true
    });
    Shirt.prototype.getPriceWithoutVat = function () {
        return this.update_price - (this.update_price / 100 * this.tax);
    };
    return Shirt;
}(Item));
//# sourceMappingURL=Shirt.js.map