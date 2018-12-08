var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CasketHat = (function (_super) {
    __extends(CasketHat, _super);
    function CasketHat(manuf, model, price, color, diameter, adertisement) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/16.jpg";
        _this.update_priceHat = price;
        _this.update_diameter = diameter;
        _this.printAdvertisement = adertisement;
        _this.colorCasketHat = color;
        return _this;
    }
    Object.defineProperty(CasketHat.prototype, "update_diameter", {
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
    Object.defineProperty(CasketHat.prototype, "update_priceHat", {
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
    CasketHat.prototype.getPriceWithoutVat = function () {
        return this.update_priceHat - (this.update_priceHat / 100 * this.tax);
    };
    CasketHat.prototype.displayDetails = function () {
        document.write("<strong>Casket Hat:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this.colorCasketHat == "White") {
            document.write("<strong>Color:</strong>" + this.colorCasketHat + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this.colorCasketHat + ">" + this.colorCasketHat + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_priceHat + "<br/><strong>Size of hat: </strong>" + this.update_diameter + "<br/>\n                        <strong> Is print the advertisement? </strong>" + this.printAdvertisement + "<br/>");
    };
    CasketHat.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return CasketHat;
}(Accessories));
//# sourceMappingURL=CasketHat.js.map