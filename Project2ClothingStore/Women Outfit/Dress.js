var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dress = (function (_super) {
    __extends(Dress, _super);
    function Dress(manuf, model, size, waist, lenDress, back) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/08.jpg";
        _this.sizeDress = size;
        _this.waistDress = waist;
        _this.LengthDress = lenDress;
        _this.openBackDress = back;
        return _this;
    }
    Dress.prototype.displayDetails = function () {
        document.write("<strong>Dress:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Price:</strong>" + this._priceDressSkirt + "<br/>\n                        <strong>Size: </strong>" + this.sizeDress + "<br/><strong>Waist: </strong>" + this.waistDress + "<br/>\n                        <strong> OpenBack: </strong>" + this.openBackDress + "<br/>");
    };
    Dress.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Dress;
}(DressSkirts));
//# sourceMappingURL=Dress.js.map