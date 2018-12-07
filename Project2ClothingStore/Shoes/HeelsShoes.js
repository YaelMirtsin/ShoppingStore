var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HeelsShoes = (function (_super) {
    __extends(HeelsShoes, _super);
    function HeelsShoes(manuf, model, country, laces, size_heel) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/13.jpg";
        _this.madeIn = country;
        _this.isLaces = laces;
        _this.sizeHeels = size_heel;
        return _this;
    }
    HeelsShoes.prototype.displayDetails = function () {
        document.write("<strong>Heeles Shoes:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._colorShoes == "White") {
            document.write("<strong>Color:</strong>" + this._colorShoes + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._colorShoes + ">" + this._colorShoes + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_priceShoes + "<br/><strong>Size: </strong>" + this._sizeShoes + "<br/><strong>Made in: </strong>" + this.madeIn + "<br/>\n                    <strong>Is laces? </strong>" + this.isLaces + "<br/><strong>Heeles: </strong>" + this.sizeHeels + "<br/>");
    };
    HeelsShoes.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return HeelsShoes;
}(Shoes));
//# sourceMappingURL=HeelsShoes.js.map