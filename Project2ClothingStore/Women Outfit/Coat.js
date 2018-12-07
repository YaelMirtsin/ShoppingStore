var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coat = (function (_super) {
    __extends(Coat, _super);
    function Coat(manuf, model, size_thickness, isRain) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/15.jpg";
        _this.thickness_of_fabric = size_thickness;
        _this.isRainCoat = isRain;
        return _this;
    }
    Coat.prototype.displayDetails = function () {
        document.write("<strong>Jacket:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Price: </strong>" + this._price + "<br/><strong>Thickness of fabric: </strong>" + this.thickness_of_fabric + "<br/><strong> Is rain coat? </strong>" + this.isRainCoat + "<br/>");
    };
    Coat.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Coat;
}(JacketCoat));
//# sourceMappingURL=Coat.js.map