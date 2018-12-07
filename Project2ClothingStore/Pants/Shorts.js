var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shorts = (function (_super) {
    __extends(Shorts, _super);
    function Shorts(manuf, model, price, size, length, material) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/06.jpg";
        _this.priceShorts = price;
        _this.sizeShorts = size;
        _this.lengthOfShorts = length;
        _this.material = material;
        return _this;
    }
    Shorts.prototype.getPriceWithoutVat = function () {
        return this.priceShorts - (this.priceShorts / 100 * this.tax);
    };
    Shorts.prototype.displayDetails = function () {
        document.write("<strong>Shorts:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>\n                        <strong>Price: </strong>" + this.priceShorts + "<br/>");
        if (this._colorPants == "White") {
            document.write("<strong>Color:</strong>" + this._colorPants + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._colorPants + ">" + this._colorPants + "</font><br/>");
        document.write("<strong> Length of shorts: </strong>" + this.lengthOfShorts + "<br/><strong> Material: </strong>" + this.material + "<br/>");
    };
    Shorts.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Shorts;
}(Pants));
//# sourceMappingURL=Shorts.js.map