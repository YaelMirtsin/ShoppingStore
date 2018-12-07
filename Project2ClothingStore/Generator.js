var Generator = (function () {
    function Generator() {
        this.objItem = new Array(6);
        this.randomClass = new RandomHelper();
    }
    Generator.prototype.getRandomItem = function (objItem, product) {
        switch (product) {
            case 0:
                objItem[product] = new TShirt(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomCaption());
                return objItem[product];
            case 1:
                objItem[product] = new ButtonedShirt(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomAmountOfButtons());
                return objItem[product];
            case 2:
                objItem[product] = new WomenShirts(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomMaterial());
                return objItem[product];
            case 3:
                objItem[product] = new Jeans(this.randomClass.getRandomPantsManufacture(), this.randomClass.getRandomPantsModel(), this.randomClass.getRandomPantsPrice(), this.randomClass.getRandomJeantsSize(), this.randomClass.getRandomJeantsLength(), this.randomClass.getRandomJeantsWithHoles());
                return objItem[product];
            case 4:
                objItem[product] = new Trouser(this.randomClass.getRandomPantsManufacture(), this.randomClass.getRandomPantsModel(), this.randomClass.getRandomPantsPrice(), this.randomClass.getRandomPantsSize(), this.randomClass.getRandomJeantsLength(), this.randomClass.getRandomPockets());
                return objItem[product];
            case 5:
                objItem[product] = new Shorts(this.randomClass.getRandomPantsManufacture(), this.randomClass.getRandomPantsModel(), this.randomClass.getRandomShortPrice(), this.randomClass.getRandomPantsSize(), this.randomClass.getRandomShortsLength(), this.randomClass.getRandomMaterial());
                return objItem[product];
            case 6:
                objItem[product] = new Skirt(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomSize(), this.randomClass.getRandomtWaist(), this.randomClass.getRandomSkirtShortLong());
                return objItem[product];
            case 7:
                objItem[product] = new Dress(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomSize(), this.randomClass.getRandomDressLength(), this.randomClass.getRandomtWaist(), this.randomClass.getRandomOpenBackDress());
                return objItem[product];
            case 8:
                objItem[product] = new EveningDress(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomSize(), this.randomClass.getRandomDressLength(), this.randomClass.getRandomtWaist(), this.randomClass.getRandomOpenBackDress());
                return objItem[product];
            case 9:
                objItem[product] = new ElegantShoes(this.randomClass.getRandomShoeManufacture(), "Elegant", this.randomClass.getRandomCountryMadeIn(), this.randomClass.getRandomIsLaces(), this.randomClass.getRandomTypeOfMaterial());
                return objItem[product];
            case 10:
                objItem[product] = new SportShoes(this.randomClass.getRandomShoeManufacture(), "Sport", this.randomClass.getRandomCountryMadeIn(), this.randomClass.getRandomIsLaces(), this.randomClass.getRandomProductionDate());
                return objItem[product];
            case 11:
                objItem[product] = new ComfortShoes(this.randomClass.getRandomShoeManufacture(), "Comfort", this.randomClass.getRandomCountryMadeIn(), this.randomClass.getRandomIsLaces(), this.randomClass.getRandomIsInsole());
                return objItem[product];
            case 12:
                objItem[product] = new HeelsShoes(this.randomClass.getRandomShoeManufacture(), "Heels", this.randomClass.getRandomCountryMadeIn(), this.randomClass.getRandomIsLaces(), this.randomClass.getRandomSizeHeel());
                return objItem[product];
            case 13:
                objItem[product] = new Jacket(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomThickness(), this.randomClass.getRandomPockets());
                return objItem[product];
            case 14:
                objItem[product] = new Coat(this.randomClass.getRandomManufacture(), this.randomClass.getRandomModel(), this.randomClass.getRandomThickness(), this.randomClass.getRandomIsRainCoat());
                return objItem[product];
            case 15:
                objItem[product] = new CasketHat(this.randomClass.getRandomCasketManufacture(), this.randomClass.getRandomCasketModel(), this.randomClass.getRandomColor(), this.randomClass.getRandomDiameter(), this.randomClass.getRandomIsAdvertisement());
                return objItem[product];
            case 16:
                objItem[product] = new TopHat(this.randomClass.getRandomTopHatManufacture(), this.randomClass.getRandomTopHatModel(), "Black", this.randomClass.getRandomDiameter(), this.randomClass.getRandomHighTopHat());
                return objItem[product];
            case 17:
                objItem[product] = new Belt(this.randomClass.getRandomBeltManufacture(), this.randomClass.getRandomBeltModel(), this.randomClass.getRandomBeltColor(), this.randomClass.getRandomBeltPrice(), this.randomClass.getRandomBuckleColor(), this.randomClass.getRandomBuckleMaterial(), this.randomClass.getRandomHeigthBelt(), this.randomClass.getRandomLengthBelt(), this.randomClass.getRandomWidthInMillimetrBelt());
                return objItem[product];
            case 18:
                objItem[product] = new SunGlasses(this.randomClass.getRandomGlassesManufacture(), this.randomClass.getRandomGlassesModel(), this.randomClass.getRandomSunGlassesPrice(), this.randomClass.getRandomFrameColor(), this.randomClass.getRandomGlassColor());
                return objItem[product];
            case 19:
                objItem[product] = new ReadingGlasses(this.randomClass.getRandomGlassesManufacture(), this.randomClass.getRandomGlassesModel(), this.randomClass.getRandomSunGlassesPrice(), this.randomClass.getRandomFrameColor(), this.randomClass.getRandomDistanceReadingGlasses());
                return objItem[product];
        }
    };
    return Generator;
}());
//# sourceMappingURL=Generator.js.map