var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ButtonedShirt = (function (_super) {
    __extends(ButtonedShirt, _super);
    function ButtonedShirt(manuf, model, buttons) {
        var _this = _super.call(this, manuf, model) || this;
        _this.imagePath = "./Store Items/02.jpg";
        _this.updateNumButtons = buttons;
        return _this;
    }
    Object.defineProperty(ButtonedShirt.prototype, "updateNumButtons", {
        get: function () {
            return this.numButtons;
        },
        set: function (numButtons) {
            if (numButtons >= this.randomClass.minButtons && numButtons <= this.randomClass.maxButtons) {
                this.numButtons = numButtons;
            }
            else
                throw new Error("Parameter must be between " + this.randomClass.minButtons + " and " + this.randomClass.maxButtons);
        },
        enumerable: true,
        configurable: true
    });
    ButtonedShirt.prototype.displayDetails = function () {
        document.write("<strong>Buttoned Shirt:<br/>Manufacturer:</strong> " + this.updateManufacturer + " &nbsp&nbsp<strong> Model: </strong>" + this.updateModel + "<br/>");
        if (this._color == "White") {
            document.write("<strong>Color:</strong>" + this._color + "<br/>");
        }
        else
            document.write("<strong>Color:</strong><font color=" + this._color + ">" + this._color + "</font><br/>");
        document.write("<strong>Price: </strong>" + this.update_price.toFixed(2) + "<br/><strong>Number of buttons: </strong>" + this.updateNumButtons + "<br/>");
    };
    ButtonedShirt.prototype.displayImage = function () {
        var str = "<br><img src=\"" + this.imagePath + "\"/><br>";
        document.write(str);
    };
    return ButtonedShirt;
}(Shirt));
//# sourceMappingURL=ButtonedShirt.js.map