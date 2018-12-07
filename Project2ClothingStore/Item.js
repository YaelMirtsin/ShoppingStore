var Item = (function () {
    function Item(manuf, model) {
        this.tax = 17;
        this.updateManufacturer = manuf;
        this.updateModel = model;
    }
    Object.defineProperty(Item.prototype, "updateManufacturer", {
        get: function () {
            return this._manufacturer;
        },
        set: function (manuf_name) {
            this._manufacturer = manuf_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "updateModel", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: true,
        configurable: true
    });
    Item.prototype.brand = function () {
        var str = "&nbsp&nbsp&nbsp" + this.updateManufacturer + "&nbsp&nbsp&nbsp" + this.updateModel;
        return str;
    };
    return Item;
}());
//# sourceMappingURL=Item.js.map