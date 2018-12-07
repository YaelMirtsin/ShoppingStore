var Dimensions = (function () {
    function Dimensions() {
    }
    Object.defineProperty(Dimensions.prototype, "updateLength", {
        get: function () {
            return this.length;
        },
        set: function (len) {
            this.length = len;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "updateWidth", {
        get: function () {
            return this.width;
        },
        set: function (wd) {
            this.width = wd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "updateHeight", {
        get: function () {
            return this.height;
        },
        set: function (hg) {
            this.height = hg;
        },
        enumerable: true,
        configurable: true
    });
    return Dimensions;
}());
//# sourceMappingURL=Dimensions.js.map