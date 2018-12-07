var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TopHat = (function (_super) {
    __extends(TopHat, _super);
    function TopHat(manuf, model, sizeHat, adertisement) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/17.jpg";
        _this.diameter = sizeHat;
        _this.printAdvertisement = adertisement;
        return _this;
    }
    TopHat.prototype.displayDetails = function () {
        document.write("<strong>Top Hat:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Price: </strong>" + this._price + "<br/><strong>Size of hat: </strong>" + this.diameter + "<br/>\n                        <strong> Is print the advertisement? </strong>" + this.printAdvertisement + "<br/>");
    };
    TopHat.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return TopHat;
}(Accessories));
//# sourceMappingURL=Hat.js.map