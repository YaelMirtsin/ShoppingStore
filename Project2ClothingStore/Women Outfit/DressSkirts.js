var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DressSkirts = (function (_super) {
    __extends(DressSkirts, _super);
    function DressSkirts(manuf, model) {
        var _this = _super.call(this, manuf, model) || this;
        _this.randomClass = new RandomHelper();
        _this._color = _this.randomClass.getRandomColor();
        _this._priceDressSkirt = _this.randomClass.getRandomDressSkirtPrice();
        return _this;
    }
    DressSkirts.prototype.getPriceWithoutVat = function () {
        return this._priceDressSkirt - (this._priceDressSkirt / 100 * this.tax);
    };
    return DressSkirts;
}(Item));
//# sourceMappingURL=DressSkirts.js.map