var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TopHat = (function (_super) {
    __extends(TopHat, _super);
    function TopHat(manuf, model, price, color, diameter, high) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/17.jpg";
        _this.update_priceHat = price;
        _this.colorTopHat = color;
        _this.diameter = diameter;
        _this.highTopHat = high;
        return _this;
    }
    Object.defineProperty(TopHat.prototype, "update_diameter", {
        get: function () {
            return this.diameter;
        },
        set: function (diameter) {
            if (diameter >= this.randomClass.minDiameterHat && diameter <= this.randomClass.maxDiameterHat)
                this.diameter = diameter;
            else
                throw new RangeError("Parameter must be between " + this.randomClass.minDiameterHat + " and " + this.randomClass.maxDiameterHat);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopHat.prototype, "update_priceHat", {
        get: function () {
            return this.priceHat;
        },
        set: function (price) {
            if (price >= this.randomClass.minHatPrice && price <= this.randomClass.maxHatPrice)
                this.priceHat = price;
            else
                throw new RangeError("Parameter must be between " + this.randomClass.minHatPrice + " and " + this.randomClass.minHatPrice);
        },
        enumerable: true,
        configurable: true
    });
    TopHat.prototype.getPriceWithoutVat = function () {
        return this.update_priceHat - (this.update_priceHat / 100 * this.tax);
    };
    TopHat.prototype.displayDetails = function () {
        document.write("<strong>Top Hat:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this.colorTopHat == "White") {
            document.write("<strong>Color:</strong>" + this.colorTopHat + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this.colorTopHat + ">" + this.colorTopHat + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_priceHat + "<br/><strong>Size of hat: </strong>" + this.update_diameter + "<br/>\n                        <strong> High: </strong>" + this.highTopHat + "<br/>");
    };
    TopHat.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return TopHat;
}(Accessories));
//# sourceMappingURL=TopHat.js.map