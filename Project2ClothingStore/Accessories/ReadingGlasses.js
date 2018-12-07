var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReadingGlasses = (function (_super) {
    __extends(ReadingGlasses, _super);
    function ReadingGlasses(manuf, model, price, color_frame, distance) {
        var _this = _super.call(this, manuf, model) || this;
        _this.randomClass = new RandomHelper();
        _this.imagePath = "./Store Items/20.jpg";
        _this.priceReadingGlass = price;
        _this.colorFrame = color_frame;
        _this.distanceForReading = distance;
        return _this;
    }
    ReadingGlasses.prototype.getPriceWithoutVat = function () {
        return this.priceReadingGlass - (this.priceReadingGlass / 100 * this.tax);
    };
    ReadingGlasses.prototype.displayDetails = function () {
        document.write("<strong>Reading Glasses: <br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        document.write("<strong>Price: </strong>" + this.priceReadingGlass + "<br/><strong>Color of the frame: </strong>" + this.colorFrame + "<br/>\n                        <strong>Distance is recommended for reading: </strong>" + this.distanceForReading + "<br/>");
    };
    ReadingGlasses.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return ReadingGlasses;
}(Accessories));
//# sourceMappingURL=ReadingGlasses.js.map