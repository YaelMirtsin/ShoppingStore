var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Belt = (function (_super) {
    __extends(Belt, _super);
    function Belt(manuf, model, color, price, color_buckle, material_buckle, heightBelt, lengthBelt, widthBelt) {
        var _this = _super.call(this, manuf, model) || this;
        _this.dimensionsBelt = new Dimensions();
        _this.randomClass = new RandomHelper();
        _this.imagePath = "./Store Items/18.jpg";
        _this._colorBelt = color;
        _this._priceBelt = price;
        _this.colorBuckle = color_buckle;
        _this.materialBuckle = material_buckle;
        _this.dimensionsBelt.updateHeight = heightBelt;
        _this.dimensionsBelt.updateLength = lengthBelt;
        _this.dimensionsBelt.updateWidth = widthBelt;
        return _this;
    }
    Belt.prototype.getPriceWithoutVat = function () {
        return this._priceBelt - (this._priceBelt / 100 * this.tax);
    };
    Belt.prototype.displayDetails = function () {
        document.write("<strong>Belt: <br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._colorBelt == "White" || this._colorBelt == "white") {
            document.write("<strong>Color:</strong>" + this._colorBelt + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._colorBelt + ">" + this._colorBelt + "</font><br/>");
        document.write("<strong>Price: </strong>" + this._priceBelt + "<br/>\n                        <strong>Buckle: </strong>color " + this.colorBuckle + "&nbsp&nbsp material " + this.materialBuckle + "<br/>\n                        <strong>Belt: </strong>&nbsp Height= " + this.dimensionsBelt.updateHeight + "&nbsp Length= " + this.dimensionsBelt.updateLength + "&nbsp \n                        Width= " + this.dimensionsBelt.updateWidth + "mm<br/>");
    };
    Belt.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Belt;
}(Accessories));
//# sourceMappingURL=Belt.js.map