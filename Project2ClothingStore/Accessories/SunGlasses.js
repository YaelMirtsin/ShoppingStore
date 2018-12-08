var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SunGlasses = (function (_super) {
    __extends(SunGlasses, _super);
    function SunGlasses(manuf, model, price, color_frame, color_glass) {
        var _this = _super.call(this, manuf, model) || this;
        _this.randomClass = new RandomHelper();
        _this.imagePath = "./Store Items/19.jpg";
        _this.update_priceSunGlass = price;
        _this.colorFrame = color_frame;
        _this.colorGlass = color_glass;
        return _this;
    }
    Object.defineProperty(SunGlasses.prototype, "update_priceSunGlass", {
        get: function () {
            return this.priceSunGlass;
        },
        set: function (price) {
            if (price > this.randomClass.minSunGlassesPrice && price < this.randomClass.maxSunGlassesPrice)
                this.priceSunGlass = price;
            else
                throw new RangeError("Parameter must be between " + this.randomClass.minSunGlassesPrice + " and " + this.randomClass.maxSunGlassesPrice);
        },
        enumerable: true,
        configurable: true
    });
    SunGlasses.prototype.getPriceWithoutVat = function () {
        return this.update_priceSunGlass - (this.update_priceSunGlass / 100 * this.tax);
    };
    SunGlasses.prototype.displayDetails = function () {
        document.write("<strong>SunGlasses: <br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        document.write("<strong>Price: </strong>" + this.update_priceSunGlass.toFixed(2) + "<br/><strong>Color of the frame: </strong>" + this.colorFrame + "<br/>\n                        <strong>Color of the glass: </strong>" + this.colorGlass + "<br/>");
    };
    SunGlasses.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return SunGlasses;
}(Accessories));
//# sourceMappingURL=SunGlasses.js.map