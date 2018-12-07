var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SportShoes = (function (_super) {
    __extends(SportShoes, _super);
    function SportShoes(manuf, model, country, laces, prodDate) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/11.jpg";
        _this.madeIn = country;
        _this.isLaces = laces;
        _this.update_dateProduction = prodDate;
        return _this;
    }
    Object.defineProperty(SportShoes.prototype, "update_dateProduction", {
        get: function () {
            return (this.dateProduction).toDateString();
        },
        set: function (prodDate) {
            var position1 = prodDate.indexOf("/") + 1;
            var position2 = prodDate.indexOf("/", position1) + 1;
            var year = parseInt(prodDate.substr(0, 4));
            var month = parseInt(prodDate.substr(position1, position2 - position1));
            var day = parseInt(prodDate.substr(position2, prodDate.length - position2));
            this.isValid(day, month, year);
            //document.write(`isValid = ${this.isValid(day, month, year)}`);
            this.dateProduction = new Date(year, month - 1, day);
        },
        enumerable: true,
        configurable: true
    });
    SportShoes.prototype.daysInMonth = function (m, y) {
        switch (m) {
            case 2:
                return ((y % 4 == 0 && y % 100) || y % 400 == 0) ? 29 : 28;
            case 4:
            case 6:
            case 8:
            case 10:
                return 30;
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
            case 11:
                return 31;
            default:
                throw new Error("Error: Production Date");
        }
    };
    SportShoes.prototype.isValid = function (d, m, y) {
        return m >= 0 && m < 12 && d > 0 && d <= this.daysInMonth(m, y);
    };
    SportShoes.prototype.displayDetails = function () {
        document.write("<strong>Sport Shoes:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._colorShoes == "White") {
            document.write("<strong>Color:</strong>" + this._colorShoes + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._colorShoes + ">" + this._colorShoes + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_priceShoes + "<br/><strong>Size: </strong>" + this._sizeShoes + "<br/><strong>Made in: </strong>" + this.madeIn + "<br/>\n                    <strong>Is laces? </strong>" + this.isLaces + "<br/><strong>Production date: </strong>" + this.dateProduction + "<br/>");
    };
    SportShoes.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return SportShoes;
}(Shoes));
//# sourceMappingURL=SportShoes.js.map