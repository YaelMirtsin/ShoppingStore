var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Jeans = (function (_super) {
    __extends(Jeans, _super);
    function Jeans(manuf, model, price, size, length, ripped) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/04.jpg";
        _this.priceJeans = price;
        _this.sizeJeans = size;
        _this.lengthOfJeans = length;
        _this.isRipped = ripped;
        return _this;
    }
    Jeans.prototype.getPriceWithoutVat = function () {
        return this.priceJeans - (this.priceJeans / 100 * this.tax);
    };
    Jeans.prototype.displayDetails = function () {
        document.write("<strong>Jeans:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>\n                        <strong>Price: </strong>" + this.priceJeans + "<br/>");
        if (this._colorPants == "White") {
            document.write("<strong>Color:</strong>" + this._colorPants + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._colorPants + ">" + this._colorPants + "</font><br/>");
        document.write("<strong>Length of Jeans: </strong>" + this.lengthOfJeans + "<br/><strong>Is Jeans ripped: </strong>" + this.isRipped + "<br/>");
    };
    Jeans.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Jeans;
}(Pants));
//# sourceMappingURL=Jeans.js.map