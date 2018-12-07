var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WomenShirts = (function (_super) {
    __extends(WomenShirts, _super);
    function WomenShirts(manuf, model, material) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/03.jpg";
        _this.typeOfMaterial = material;
        return _this;
    }
    WomenShirts.prototype.displayDetails = function () {
        document.write("<strong>Women's Shirt: <br/> Manufacturer: </strong>" + this.updateManufacturer + " &nbsp&nbsp<strong>Model: </strong>" + this.updateModel + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_price + "<br/><strong>Material: </strong>" + this.typeOfMaterial + "<br/>");
    };
    WomenShirts.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return WomenShirts;
}(Shirt));
//# sourceMappingURL=WomenShirts.js.map