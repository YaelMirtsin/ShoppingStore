var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pants = (function (_super) {
    __extends(Pants, _super);
    function Pants(manuf, model) {
        var _this = _super.call(this, manuf, model) || this;
        _this.randomClass = new RandomHelper();
        _this._colorPants = _this.randomClass.getRandomPantsColor();
        return _this;
    }
    return Pants;
}(Item));
//# sourceMappingURL=Pants.js.map