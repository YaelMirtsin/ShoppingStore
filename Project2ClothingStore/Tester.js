var Tester = (function () {
    function Tester() {
        this.objArray = new Generator();
        this.randomClass = new RandomHelper();
        this.totalItems = 20;
    }
    Tester.prototype.getAmountOfItems = function () {
        var isAmountOfItemsValid = false;
        var amItems = parseInt(prompt("Enter amount of items:"));
        while (!isAmountOfItemsValid) {
            if (amItems > 0 && amItems < 500) {
                isAmountOfItemsValid = true;
                return amItems;
            }
            else
                amItems = parseInt(prompt("Wrong amount of items.Try again."));
        }
    };
    Tester.prototype.installFlagArray = function (flagArr, arrLength) {
        for (var i = 0; i < arrLength; i++) {
            flagArr[i] = 0;
        }
        return flagArr;
    };
    Tester.prototype.isFlagArrFull = function (flagArr) {
        for (var i = 0; i < flagArr.length; i++) {
            if (flagArr[i] == 0)
                return false;
        }
        return true;
    };
    Tester.prototype.displayPriceWithoutVat = function (priceWithoutVat) {
        document.write("<strong>Price without vat is: </strong>" + priceWithoutVat.toFixed(2) + "<br/>");
    };
    Tester.prototype.showItem = function (a) {
        a.displayDetails();
        this.displayPriceWithoutVat(a.getPriceWithoutVat());
        document.write("<strong>Brand:</strong> " + a.brand() + "<br/>");
        a.displayImage();
        document.write("<hr/><br/><br/>");
    };
    Tester.prototype.test = function () {
        var userRequestAmountOfItems = this.getAmountOfItems();
        var flagArr = new Array(userRequestAmountOfItems);
        var index = 0;
        var numberOfShowedItems = 0;
        if (userRequestAmountOfItems <= this.totalItems) {
            flagArr = this.installFlagArray(flagArr, userRequestAmountOfItems);
            while (!this.isFlagArrFull(flagArr)) {
                index = this.randomClass.getRandomItemInArrayLessThen20(userRequestAmountOfItems);
                if (flagArr[index] == 0) {
                    this.objArray.objItem[index] = this.objArray.getRandomItem(this.objArray.objItem, index);
                    flagArr[index] = 1;
                    this.showItem(this.objArray.objItem[index]);
                }
            }
        }
        else
            while (numberOfShowedItems < userRequestAmountOfItems) {
                index = this.randomClass.getRandomItemInArrayBiggerThen20();
                this.objArray.objItem[index] = this.objArray.getRandomItem(this.objArray.objItem, index);
                this.showItem(this.objArray.objItem[index]);
                numberOfShowedItems++;
            }
    };
    return Tester;
}());
//# sourceMappingURL=Tester.js.map