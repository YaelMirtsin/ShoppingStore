var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Accessories = (function (_super) {
    __extends(Accessories, _super);
    function Accessories(manuf, model) {
        var _this = _super.call(this, manuf, model) || this;
        _this.randomClass = new RandomHelper();
        _this._size = _this.randomClass.getRandomSize();
        _this._price = _this.randomClass.getRandomPrice();
        return _this;
    }
    Accessories.prototype.getPriceWithoutVat = function () {
        return this._price - (this._price / 100 * this.tax);
    };
    return Accessories;
}(Item));
//# sourceMappingURL=Accessories.js.map