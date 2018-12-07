var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TShirt = (function (_super) {
    __extends(TShirt, _super);
    function TShirt(manuf, model, caption) {
        var _this = _super.call(this, manuf, model) || this;
        _this.theCaptionOnTheShirt = null;
        _this.imagePath = "./Store Items/01.jpg";
        _this.updateCaptionOfShirt = caption;
        return _this;
    }
    Object.defineProperty(TShirt.prototype, "updateCaptionOfShirt", {
        get: function () {
            return this.theCaptionOnTheShirt;
        },
        set: function (theCaptionOnTheShirt) {
            this.theCaptionOnTheShirt = theCaptionOnTheShirt;
        },
        enumerable: true,
        configurable: true
    });
    TShirt.prototype.displayDetails = function () {
        document.write("<strong>T-Shirt:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_price + "<br/><strong>Caption of the shirt: </strong>" + this.updateCaptionOfShirt + "<br/>");
    };
    TShirt.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return TShirt;
}(Shirt));
//# sourceMappingURL=TShirt.js.map