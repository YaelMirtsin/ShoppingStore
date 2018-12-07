var RandomHelper = (function () {
    function RandomHelper() {
        this.minShirtPrice = 20;
        this.maxShirtPrice = 400;
        this.minShirtSize = 32;
        this.maxShirtSize = 46;
        this.minLengthSleeveSize = 25;
        this.maxLengthSleeveSize = 97;
        this.maxButtons = 20;
        this.minButtons = 1;
        this.minPantsPrice = 100;
        this.maxPantsPrice = 1000;
        this.minJeansSize = 28;
        this.maxJeansSize = 38;
        this.minJeansLength = 76;
        this.maxJeansLength = 86;
        this.minPantsSize = 44;
        this.maxPantsSize = 58;
        this.minPockets = 0;
        this.maxPockets = 8;
        this.minShortsLength = 26;
        this.maxShortsLength = 38;
        this.minShortsPrice = 50;
        this.maxShortsPrice = 400;
        //Generator - Class Dresses and Skirts - variables
        this.minPriceDressSkirt = 100;
        this.maxPriceDressSkirt = 1000;
        this.minSizeWaist = 60;
        this.maxSizeWaist = 100;
        this.minLengthDress = 76;
        this.maxLengthDress = 84;
        this.minShoesSize = 36;
        this.maxShoesSize = 42;
        this.minShoesPrice = 100;
        this.maxShoesPrice = 1000;
        // Generator - Class Jackets and Coats variables
        this.minSizeThickness = 5;
        this.maxSizeThickness = 16;
        this.minDiameterHat = 54;
        this.maxDiameterHat = 64;
        this.minHigh = 25;
        this.maxHigh = 44;
        this.minHeightBelt = 3;
        this.maxHeightBelt = 4;
        this.minLengthBelt = 75;
        this.maxLengthBelt = 105;
        this.minWidthMillimetrBelt = 31;
        this.maxWidthMillimetrBelt = 39;
        this.minBeltPrice = 45;
        this.maxBeltPrice = 1000;
        this.minSunGlassesPrice = 150;
        this.maxSunGlassesPrice = 1500;
        this.minDistance = 30;
        this.maxDistance = 40;
    }
    // --------------------------------------
    // Generator - Class Shirt - random functions
    RandomHelper.prototype.getRandomManufacture = function () {
        var index = Math.floor(Math.random() * RandomHelper.manufacture.length);
        return RandomHelper.manufacture[index];
    };
    RandomHelper.prototype.getRandomModel = function () {
        var index = Math.floor(Math.random() * RandomHelper.model.length);
        return RandomHelper.model[index];
    };
    RandomHelper.prototype.getRandomMaterial = function () {
        var index = Math.floor(Math.random() * RandomHelper.fabric.length);
        return RandomHelper.fabric[index];
    };
    RandomHelper.prototype.getRandomCaption = function () {
        var index = Math.floor(Math.random() * RandomHelper.caption.length);
        return RandomHelper.caption[index];
    };
    RandomHelper.prototype.getRandomColor = function () {
        var index = Math.floor(Math.random() * RandomHelper.colors.length);
        return RandomHelper.colors[index];
    };
    RandomHelper.prototype.getRandomPrice = function () {
        var price = Math.floor(Math.random() * (this.maxShirtPrice - this.minShirtPrice + 1) + this.minShirtPrice);
        return price;
    };
    RandomHelper.prototype.getRandomSize = function () {
        var size = Math.floor(Math.random() * (this.maxShirtSize - this.minShirtSize + 1) + this.minShirtSize);
        return size;
    };
    RandomHelper.prototype.getRandomSleeveSize = function () {
        var size = Math.floor(Math.random() * (this.maxLengthSleeveSize - this.minLengthSleeveSize + 1) + this.minLengthSleeveSize);
        return size;
    };
    RandomHelper.prototype.getRandomAmountOfButtons = function () {
        var amount_buttons = Math.floor(Math.random() * (this.maxButtons - this.minButtons + 1) + this.minButtons);
        return amount_buttons;
    };
    RandomHelper.prototype.getRandomItemInArrayBiggerThen20 = function () {
        // RandomHelper.counter++;
        var index = Math.floor(Math.random() * 20);
        //document.write(`Counter = ${RandomHelper.counter}<br/>`);
        return index;
    };
    RandomHelper.prototype.getRandomItemInArrayLessThen20 = function (amountItems) {
        var index = Math.floor(Math.random() * amountItems);
        return index;
    };
    // Generator - Class Pants - functions
    RandomHelper.prototype.getRandomPantsManufacture = function () {
        var index = Math.floor(Math.random() * RandomHelper.manufPants.length);
        return RandomHelper.manufPants[index];
    };
    RandomHelper.prototype.getRandomPantsModel = function () {
        var index = Math.floor(Math.random() * RandomHelper.modelPants.length);
        return RandomHelper.modelPants[index];
    };
    RandomHelper.prototype.getRandomPantsColor = function () {
        var index = Math.floor(Math.random() * RandomHelper.colorPants.length);
        return RandomHelper.colorPants[index];
    };
    RandomHelper.prototype.getRandomPantsPrice = function () {
        var price = Math.floor(Math.random() * (this.maxPantsPrice - this.minPantsPrice + 1) + this.minPantsPrice);
        return price;
    };
    RandomHelper.prototype.getRandomPantsSize = function () {
        var size = Math.floor(Math.random() * (this.maxPantsSize - this.minPantsSize + 1) + this.minPantsSize);
        return size;
    };
    RandomHelper.prototype.getRandomPockets = function () {
        var size = Math.floor(Math.random() * (this.maxPockets - this.minPockets + 1) + this.minPockets);
        return size;
    };
    RandomHelper.prototype.getRandomJeantsSize = function () {
        var size = Math.floor(Math.random() * (this.maxJeansSize - this.minJeansSize + 1) + this.minJeansSize);
        return size;
    };
    RandomHelper.prototype.getRandomJeantsLength = function () {
        var size = Math.floor(Math.random() * (this.maxJeansLength - this.minJeansLength + 1) + this.minJeansLength);
        return size;
    };
    RandomHelper.prototype.getRandomJeantsWithHoles = function () {
        var size = Math.floor(Math.random() * 2);
        return (size == 1) ? true : false;
    };
    RandomHelper.prototype.getRandomShortsLength = function () {
        var size = Math.floor(Math.random() * (this.maxShortsLength - this.minShortsLength + 1) + this.minShortsLength);
        return size;
    };
    RandomHelper.prototype.getRandomShortPrice = function () {
        var price = Math.floor(Math.random() * (this.maxShortsPrice - this.minShirtPrice + 1) + this.minShortsPrice);
        return price;
    };
    //Generator - Class Dress and Skirt - functions
    RandomHelper.prototype.getRandomDressSkirtPrice = function () {
        var price = Math.floor(Math.random() * (this.maxPriceDressSkirt - this.minPriceDressSkirt + 1) + this.minPriceDressSkirt);
        return price;
    };
    RandomHelper.prototype.getRandomSkirtShortLong = function () {
        var style = Math.floor(Math.random() * 2);
        return (style == 1) ? "short" : "long";
    };
    RandomHelper.prototype.getRandomOpenBackDress = function () {
        var style = Math.floor(Math.random() * 2);
        return (style == 1) ? true : false;
    };
    RandomHelper.prototype.getRandomtWaist = function () {
        var size = Math.floor(Math.random() * (this.maxSizeWaist - this.minSizeWaist + 1) + this.minSizeWaist);
        return size;
    };
    RandomHelper.prototype.getRandomDressLength = function () {
        var size = Math.floor(Math.random() * (this.maxLengthDress - this.minLengthDress + 1) + this.minLengthDress);
        return size;
    };
    // Generator - Class Shoes function
    RandomHelper.prototype.getRandomShoeManufacture = function () {
        var index = Math.floor(Math.random() * RandomHelper.companyShoes.length);
        return RandomHelper.companyShoes[index];
    };
    RandomHelper.prototype.getRandomCountryMadeIn = function () {
        var country = Math.floor(Math.random() * RandomHelper.countryMadeIn.length);
        return RandomHelper.countryMadeIn[country];
    };
    RandomHelper.prototype.getRandomShoesColor = function () {
        var index = Math.floor(Math.random() * RandomHelper.colorShoes.length);
        return RandomHelper.colorShoes[index];
    };
    RandomHelper.prototype.getRandomShoesPrice = function () {
        var price = Math.floor(Math.random() * (this.maxShoesPrice - this.minShoesPrice + 1) + this.minShoesPrice);
        return price;
    };
    RandomHelper.prototype.getRandomShoesSize = function () {
        var size = Math.floor(Math.random() * (this.maxShoesSize - this.minShoesSize + 1) + this.minShoesSize);
        return size;
    };
    RandomHelper.prototype.getRandomIsLaces = function () {
        var laces = Math.floor(Math.random() * 2);
        return (laces == 1) ? true : false;
    };
    RandomHelper.prototype.getRandomTypeOfMaterial = function () {
        var index = Math.floor(Math.random() * RandomHelper.materialShoes.length);
        return RandomHelper.materialShoes[index];
    };
    RandomHelper.prototype.getRandomIsInsole = function () {
        var insole = Math.floor(Math.random() * 2);
        return (insole == 1) ? true : false;
    };
    RandomHelper.prototype.getRandomSizeHeel = function () {
        var index = Math.floor(Math.random() * RandomHelper.heelsShoes.length);
        return RandomHelper.heelsShoes[index];
    };
    RandomHelper.prototype.getRandomProductionDate = function () {
        var today = new Date();
        var year = today.getFullYear() - Math.floor(Math.random() * 2);
        var month = Math.floor(Math.random() * 11 + 1);
        var day = Math.floor(Math.random() * 30 + 1);
        var newdate = year + "/" + month + "/" + day;
        return newdate;
    };
    //Generator - Class Jackets and Coats - functions
    RandomHelper.prototype.getRandomThickness = function () {
        var size = Math.floor(Math.random() * (this.maxSizeThickness - this.minSizeThickness + 1) + this.minSizeThickness);
        return size;
    };
    RandomHelper.prototype.getRandomIsRainCoat = function () {
        var rain_coat = Math.floor(Math.random() * 2);
        return (rain_coat == 1) ? true : false;
    };
    // Generator - Class Advertisement - functions
    RandomHelper.prototype.getRandomDiameter = function () {
        var diameter = Math.floor(Math.random() * (this.maxDiameterHat - this.minDiameterHat + 1) + this.minDiameterHat);
        return diameter;
    };
    RandomHelper.prototype.getRandomIsAdvertisement = function () {
        var advertisement = Math.floor(Math.random() * 2);
        return (advertisement == 1) ? true : false;
    };
    RandomHelper.prototype.getRandomHighTopHat = function () {
        var size = Math.floor(Math.random() * (this.maxHigh - this.minHigh + 1) + this.minHigh);
        return size;
    };
    RandomHelper.prototype.getRandomBeltColor = function () {
        var index = Math.floor(Math.random() * RandomHelper.colorsBelt.length);
        return RandomHelper.colorsBelt[index];
    };
    RandomHelper.prototype.getRandomBuckleColor = function () {
        var index = Math.floor(Math.random() * RandomHelper.colorBuckle.length);
        return RandomHelper.colorBuckle[index];
    };
    RandomHelper.prototype.getRandomBeltPrice = function () {
        var price = Math.floor(Math.random() * (this.maxBeltPrice - this.minBeltPrice + 1) + this.minBeltPrice);
        return price;
    };
    RandomHelper.prototype.getRandomBuckleMaterial = function () {
        var index = Math.floor(Math.random() * RandomHelper.materialBuckle.length);
        return RandomHelper.materialBuckle[index];
    };
    RandomHelper.prototype.getRandomWidthInMillimetrBelt = function () {
        var size = Math.floor(Math.random() * (this.maxWidthMillimetrBelt - this.minWidthMillimetrBelt + 1) + this.minWidthMillimetrBelt);
        return size;
    };
    RandomHelper.prototype.getRandomHeigthBelt = function () {
        var size = Math.floor(Math.random() * (this.maxHeightBelt - this.minHeightBelt + 1) + this.minHeightBelt);
        return size;
    };
    RandomHelper.prototype.getRandomLengthBelt = function () {
        var size = Math.floor(Math.random() * (this.maxLengthBelt - this.minLengthBelt + 1) + this.minLengthBelt);
        return size;
    };
    RandomHelper.prototype.getRandomFrameColor = function () {
        var index = Math.floor(Math.random() * RandomHelper.colorOfFrame.length);
        return RandomHelper.colorOfFrame[index];
    };
    RandomHelper.prototype.getRandomGlassColor = function () {
        var index = Math.floor(Math.random() * RandomHelper.colorOfGlass.length);
        return RandomHelper.colorOfGlass[index];
    };
    RandomHelper.prototype.getRandomSunGlassesPrice = function () {
        var price = Math.floor(Math.random() * (this.maxSunGlassesPrice - this.minSunGlassesPrice + 1) + this.minSunGlassesPrice);
        return price;
    };
    RandomHelper.prototype.getRandomDistanceReadingGlasses = function () {
        var distance = Math.floor(Math.random() * (this.maxDistance - this.minDistance + 1) + this.minDistance);
        return distance;
    };
    RandomHelper.prototype.getRandomGlassesManufacture = function () {
        var index = Math.floor(Math.random() * RandomHelper.manufGlasses.length);
        return RandomHelper.manufGlasses[index];
    };
    RandomHelper.prototype.getRandomGlassesModel = function () {
        var index = Math.floor(Math.random() * RandomHelper.modelGlasses.length);
        return RandomHelper.modelGlasses[index];
    };
    RandomHelper.prototype.getRandomBeltManufacture = function () {
        var index = Math.floor(Math.random() * RandomHelper.manufBelt.length);
        return RandomHelper.manufBelt[index];
    };
    RandomHelper.prototype.getRandomBeltModel = function () {
        var index = Math.floor(Math.random() * RandomHelper.modelBelt.length);
        return RandomHelper.modelBelt[index];
    };
    RandomHelper.prototype.getRandomCasketManufacture = function () {
        var index = Math.floor(Math.random() * RandomHelper.manufCasket.length);
        return RandomHelper.manufCasket[index];
    };
    RandomHelper.prototype.getRandomCasketModel = function () {
        var index = Math.floor(Math.random() * RandomHelper.modelCasket.length);
        return RandomHelper.modelCasket[index];
    };
    RandomHelper.prototype.getRandomTopHatModel = function () {
        var index = Math.floor(Math.random() * RandomHelper.modelTopHat.length);
        return RandomHelper.modelTopHat[index];
    };
    RandomHelper.prototype.getRandomTopHatManufacture = function () {
        return "SilkTopHats";
    };
    return RandomHelper;
}());
// private static  counter:number = 0;
// Generator - Class Shirts - variables
RandomHelper.colors = ["Red", "Black", "White", "Green", "Purple", "Blue", "Gray"];
RandomHelper.manufacture = ["Vince Camuto", "Levis", "Calvin Klein", "Zara", "American Eagle"];
RandomHelper.model = ["V-Neck", "Short Sleeve", "Long Sleeve", "Tight", "Wide"];
RandomHelper.fabric = ["Cotton", "Silk", "Polyester"];
RandomHelper.caption = ["I'm not lazy, I'm on Energy Saving Mode.", "Less Whine More Wine", "I speak fluent sarcasm.", "D.I.E.T-Did I eat that?"];
// Generator  - Class Pants - variables
RandomHelper.colorPants = ["Black", "White", "Blue", "Gray"];
RandomHelper.manufPants = ["Guess", "Levis", "Calvin Klein", "Diesel", "Lee", "Wrangler", "Nike", "Polo Ralph Lauren"];
RandomHelper.modelPants = ["Sports", "Classic", "Conservative", "Scuba", "High Weist"];
// Generator - Class Shoes - variebles
RandomHelper.colorShoes = ["Black", "White", "Blue", "Brown", "Gray"];
RandomHelper.countryMadeIn = ["China", "Israel", "Italy", "Spain", "Indonesia"];
RandomHelper.materialShoes = ["fabric", "leather", "suede"];
RandomHelper.heelsShoes = ["low", "medium", "high"];
RandomHelper.companyShoes = ["Nike", "Adidas", "Testoni", "Berluti", "Converse", "Reebok", "Puma", "Bostonian"];
// Generator - Class Accessories - variables
RandomHelper.manufGlasses = ["Ray-Ban", "Asos", "Armani", "Michael Kors", "Vogue"];
RandomHelper.modelGlasses = ["Wayfarer", "Classic", "Retro", "Clubmaster", "Round"];
RandomHelper.manufBelt = ["Gucci", "Boss", "Asos", "Pazaro"];
RandomHelper.modelBelt = ["Tiger", "Logo", "Bee", "G-plaque"];
RandomHelper.modelCasket = ["Cap men", "Indigo beach", "Simple casket"];
RandomHelper.manufCasket = ["Elehem hat store", "Alisa", "Mitchells"];
RandomHelper.modelTopHat = ["high hat", "silk hat", "cylinder hat", "chimney pot hat", "stove pipe hat"];
RandomHelper.colorsBelt = ["white", "yellow", "gold", "orange", "green", "blue", "purple", "brown", "red", "black"];
RandomHelper.colorBuckle = ["Black", "Brown"];
RandomHelper.materialBuckle = ["metal", "leather", "fabric", "plastic"];
RandomHelper.colorOfGlass = ["yellow", "gold", "amber", "rose", "vermillion"];
RandomHelper.colorOfFrame = ["white", "gray", "black", "brown", "purple"];
//# sourceMappingURL=RandomHelper.js.map