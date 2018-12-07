var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EveningDress = (function (_super) {
    __extends(EveningDress, _super);
    function EveningDress(manuf, model, size, waist, lenDress, back) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/09.jpg";
        _this.sizeEvDress = size;
        _this.waistEvDress = waist;
        _this.lengthEvDress = lenDress;
        _this.openBackEvDress = back;
        return _this;
    }
    EveningDress.prototype.displayDetails = function () {
        document.write("<strong>Evening Dress:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Price: </strong>" + this._priceDressSkirt + "<br/><strong>Size: </strong>" + this.sizeEvDress + "<br/>\n                        <strong>Waist: </strong>" + this.waistEvDress + "<br/><strong>OpenBack: </strong>" + this.openBackEvDress + "<br/>");
    };
    EveningDress.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return EveningDress;
}(DressSkirts));
//# sourceMappingURL=EveningDress.js.map