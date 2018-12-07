var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Trouser = (function (_super) {
    __extends(Trouser, _super);
    function Trouser(manuf, model, price, size, length, pockets) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/05.jpg";
        _this.sizePants = size;
        _this.lengthOfTrouser = length;
        _this.numOfPockets = pockets;
        _this.pricePants = price;
        return _this;
    }
    Trouser.prototype.getPriceWithoutVat = function () {
        return this.pricePants - (this.pricePants / 100 * this.tax);
    };
    Trouser.prototype.displayDetails = function () {
        document.write("<strong>Trouser :<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>\n                        <strong>Price: </strong>" + this.pricePants + "<br/>");
        if (this._colorPants == "White") {
            document.write("<strong>Color:</strong>" + this._colorPants + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._colorPants + ">" + this._colorPants + "</font><br/>");
        document.write("<strong>Length of Trouser: </strong>" + this.lengthOfTrouser + "<br/> <strong>Number of pockets: </strong>" + this.numOfPockets + "<br/>");
    };
    Trouser.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Trouser;
}(Pants));
//# sourceMappingURL=Trouser.js.map