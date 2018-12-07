var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Jacket = (function (_super) {
    __extends(Jacket, _super);
    function Jacket(manuf, model, size_thickness, pockets) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/14.jpg";
        _this.thickness_of_fabric = size_thickness;
        _this.num_of_pockets = pockets;
        return _this;
    }
    Jacket.prototype.displayDetails = function () {
        document.write("<strong>Jacket:<br/> Manufacturer: </strong>" + this.updateManufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>\n                        <strong>Price: </strong>" + this._price + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Thickness of fabric: </strong>" + this.thickness_of_fabric + "<br/><strong> Number of pockets: </strong>" + this.num_of_pockets + "<br/>");
    };
    Jacket.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return Jacket;
}(JacketCoat));
//# sourceMappingURL=Jacket.js.map