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
        _this.update_priceBelt = price;
        _this.update_colorBuckle = color_buckle;
        _this.materialBuckle = material_buckle;
        _this.dimensionsBelt.updateHeight = heightBelt;
        _this.dimensionsBelt.updateLength = lengthBelt;
        _this.dimensionsBelt.updateWidth = widthBelt;
        return _this;
    }
    Object.defineProperty(Belt.prototype, "update_priceBelt", {
        get: function () {
            return this._priceBelt;
        },
        set: function (price) {
            if (price >= this.randomClass.minBeltPrice && price <= this.randomClass.maxBeltPrice)
                this._priceBelt = price;
            else
                throw new RangeError("Parameter must be between " + this.randomClass.minBeltPrice + " and " + this.randomClass.minBeltPrice);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "update_colorBuckle", {
        get: function () {
            return this.colorBuckle;
        },
        set: function (color) {
            this.colorBuckle = color;
        },
        enumerable: true,
        configurable: true
    });
    Belt.prototype.getPriceWithoutVat = function () {
        return this.update_priceBelt - (this.update_priceBelt / 100 * this.tax);
    };
    Belt.prototype.getColorBuckle = function () {
        return this.update_colorBuckle;
    };
    Belt.prototype.displayDetails = function () {
        document.write("<strong>Belt: <br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._colorBelt == "White" || this._colorBelt == "white") {
            document.write("<strong>Color:</strong>" + this._colorBelt + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._colorBelt + ">" + this._colorBelt + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_priceBelt.toFixed(2) + "<br/>\n                        <strong>Buckle: </strong>color " + this.update_colorBuckle + "&nbsp&nbsp <strong>Material: </strong>" + this.materialBuckle + "<br/>\n                        <strong>Belt: </strong>&nbsp Height= " + this.dimensionsBelt.updateHeight + "&nbsp Length= " + this.dimensionsBelt.updateLength + "&nbsp \n                        Width= " + this.dimensionsBelt.updateWidth + "mm<br/>");
    };
    Belt.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Belt;
}(Accessories));
//# sourceMappingURL=Belt.js.map