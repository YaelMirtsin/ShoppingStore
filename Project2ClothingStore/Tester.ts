class Tester {
    objArray: Generator = new Generator();
    randomClass: RandomHelper = new RandomHelper();
    readonly totalItems: number = 20;

    protected getAmountOfItems(): number {
        var isAmountOfItemsValid: boolean = false;
        var amItems: number = parseInt(prompt(`Enter amount of items:`));

        while (!isAmountOfItemsValid) {
            if (amItems > 0 && amItems < 500) {
                isAmountOfItemsValid = true;
                return amItems;
            } else amItems = parseInt(prompt(`Wrong amount of items.Try again.`));
        }
    }

    protected installFlagArray(flagArr: Array<number>, arrLength: number): Array<number> {
        for (var i = 0; i < arrLength; i++) {
            flagArr[i] = 0;
        }
        return flagArr;
    }
    protected isFlagArrFull(flagArr: Array<number>): boolean {
        for (var i = 0; i < flagArr.length; i++) {
            if (flagArr[i] == 0)
                return false;
        }
        return true;
    }

    protected displayPriceWithoutVat(priceWithoutVat: number) {
        document.write(`<strong>Price without vat is: </strong>${priceWithoutVat.toFixed(2)}<br/>`);
    }

    protected showItem(a: Item): void {
        a.displayDetails();
        this.displayPriceWithoutVat(a.getPriceWithoutVat());
        document.write(`<strong>Brand:</strong> ${a.brand()}<br/>`);
        a.displayImage();
        document.write(`<hr/><br/><br/>`);
    }

    test() {
        var userRequestAmountOfItems: number = this.getAmountOfItems();
        var flagArr: Array<number> = new Array(userRequestAmountOfItems);
        var index: number = 0;
        var numberOfShowedItems: number = 0;

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
        } else while (numberOfShowedItems < userRequestAmountOfItems) {
            index = this.randomClass.getRandomItemInArrayBiggerThen20();
            this.objArray.objItem[index] = this.objArray.getRandomItem(this.objArray.objItem, index);
            this.showItem(this.objArray.objItem[index]);
            numberOfShowedItems++;
        }
    }
}




