class RandomHelper {
  // private static  counter:number = 0;
    // Generator - Class Shirts - variables
    static readonly colors: Array<string> = ["Red", "Black", "White", "Green", "Purple", "Blue", "Gray"];
    static readonly manufacture: Array<string> = ["Vince Camuto", "Levis", "Calvin Klein", "Zara", "American Eagle"];
    static readonly model: Array<string> = ["V-Neck", "Short Sleeve", "Long Sleeve", "Tight", "Wide"];
    static readonly fabric: Array<string> = ["Cotton", "Silk", "Polyester"];
    static readonly caption: Array<string> = ["I'm not lazy, I'm on Energy Saving Mode.", "Less Whine More Wine", "I speak fluent sarcasm.", "D.I.E.T-Did I eat that?"];
    readonly minShirtPrice: number = 20;
    readonly maxShirtPrice: number = 400;
    readonly minShirtSize: number = 32;
    readonly maxShirtSize: number = 46;
    readonly minLengthSleeveSize: number = 25;
    readonly maxLengthSleeveSize: number = 97;
    readonly maxButtons: number = 20;
    readonly minButtons: number = 1;

    // Generator  - Class Pants - variables
    static readonly colorPants: Array<string> = ["Black", "White", "Blue", "Gray"];
    static readonly manufPants: Array<string> = ["Guess", "Levis", "Calvin Klein", "Diesel", "Lee", "Wrangler", "Nike", "Polo Ralph Lauren"];
    static readonly modelPants: Array<string> = ["Sports", "Classic", "Conservative", "Scuba", "High Weist"];
    readonly minPantsPrice: number = 100;
    readonly maxPantsPrice: number = 1000;
    readonly minJeansSize: number = 28;
    readonly maxJeansSize: number = 38;
    readonly minJeansLength: number = 76;
    readonly maxJeansLength: number = 86;
    readonly minPantsSize: number = 44;
    readonly maxPantsSize: number = 58;
    readonly minPockets: number = 0;
    readonly maxPockets: number = 8;
    readonly minShortsLength: number = 26;
    readonly maxShortsLength: number = 38;
    readonly minShortsPrice: number = 50;
    readonly maxShortsPrice: number = 400;

    //Generator - Class Dresses and Skirts - variables

    readonly minPriceDressSkirt: number = 100;
    readonly maxPriceDressSkirt: number = 1000;
    readonly minSizeWaist: number = 60;
    readonly maxSizeWaist: number = 100;
    readonly minLengthDress: number = 76;
    readonly maxLengthDress: number = 84;


    // Generator - Class Shoes - variebles

    static readonly colorShoes: Array<string> = ["Black", "White", "Blue", "Brown", "Gray"];
    static readonly countryMadeIn: Array<string> = ["China", "Israel", "Italy", "Spain", "Indonesia"];
    static readonly materialShoes: Array<string> = ["fabric", "leather", "suede"];
    static readonly heelsShoes: Array<string> = ["low", "medium", "high"];
    static readonly companyShoes: Array<string> = ["Nike", "Adidas", "Testoni", "Berluti", "Converse", "Reebok", "Puma", "Bostonian"];
    readonly minShoesSize: number = 36;
    readonly maxShoesSize: number = 42;
    readonly minShoesPrice: number = 100;
    readonly maxShoesPrice: number = 1000;

    // Generator - Class Jackets and Coats variables

    readonly minSizeThickness: number = 5;
    readonly maxSizeThickness: number = 16;

    // Generator - Class Accessories - variables

    static readonly manufGlasses: Array<string> = ["Ray-Ban", "Asos", "Armani", "Michael Kors","Vogue"];
    static readonly modelGlasses: Array<string> = ["Wayfarer", "Classic", "Retro", "Clubmaster", "Round"];
    static readonly manufBelt: Array<string> = ["Gucci", "Boss", "Asos","Pazaro"];
    static readonly modelBelt: Array<string> = ["Tiger", "Logo", "Bee", "G-plaque"];
    static readonly modelCasket: Array<string> = ["Cap men", "Indigo beach", "Simple casket"]; 
    static readonly manufCasket: Array<string> = ["Elehem hat store", "Alisa", "Mitchells"]; 
    static readonly modelTopHat: Array<string> = ["high hat", "silk hat", "cylinder hat", "chimney pot hat", "stove pipe hat"];
    readonly minDiameterHat: number = 54;
    readonly maxDiameterHat: number = 64;
    readonly minHigh: number = 25;
    readonly maxHigh: number = 44;
    static readonly colorsBelt: Array<string> = ["white", "yellow", "gold", "orange", "green", "blue", "purple", "brown", "red", "black"];
    static readonly colorBuckle: Array<string> = ["Black", "Brown"];
    static readonly materialBuckle: Array<string> = ["metal", "leather", "fabric", "plastic"];
    readonly minHeightBelt: number = 3;
    readonly maxHeightBelt: number = 4;
    readonly minLengthBelt: number = 75;
    readonly maxLengthBelt: number = 105;
    readonly minWidthMillimetrBelt: number = 31;
    readonly maxWidthMillimetrBelt: number = 39;
    readonly minBeltPrice: number = 45;
    readonly maxBeltPrice: number = 1000;
    static readonly colorOfGlass: Array<string> = ["yellow", "gold", "amber", "rose", "vermillion"];
    static readonly colorOfFrame: Array<string> = ["white", "gray", "black", "brown", "purple"];
    readonly minSunGlassesPrice: number = 150;
    readonly maxSunGlassesPrice: number = 1500;
    readonly minDistance: number = 30;
    readonly maxDistance: number = 40;
    readonly minHatPrice: number = 50;
    readonly maxHatPrice: number = 200;
    
    // --------------------------------------

    // Generator - Class Shirt - random functions
    getRandomManufacture(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.manufacture.length);
        return RandomHelper.manufacture[index];
    }

    getRandomModel(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.model.length);
        return RandomHelper.model[index];
    }


    getRandomMaterial(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.fabric.length);
        return RandomHelper.fabric[index];
    }

    getRandomCaption(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.caption.length);
        return RandomHelper.caption[index];
    }

    getRandomColor(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.colors.length);
        return RandomHelper.colors[index];
    }
    getRandomPrice(): number {
        let price: number = Math.floor(Math.random() * (this.maxShirtPrice - this.minShirtPrice + 1) + this.minShirtPrice);
        return price;
    }
    getRandomSize(): number {
        let size: number = Math.floor(Math.random() * (this.maxShirtSize - this.minShirtSize + 1) + this.minShirtSize);
        return size;
    }
    getRandomSleeveSize(): number {
        let size: number = Math.floor(Math.random() * (this.maxLengthSleeveSize - this.minLengthSleeveSize + 1) + this.minLengthSleeveSize);
        return size;
    }

    getRandomAmountOfButtons(): number {
        let amount_buttons: number = Math.floor(Math.random() * (this.maxButtons - this.minButtons + 1) + this.minButtons);
        return amount_buttons;
    }

    getRandomItemInArrayBiggerThen20(): number {
       // RandomHelper.counter++;
        let index: number = Math.floor(Math.random() * 20);
        //document.write(`Counter = ${RandomHelper.counter}<br/>`);
        return index;
    }

    getRandomItemInArrayLessThen20(amountItems: number): number {
        let index: number = Math.floor(Math.random() * amountItems);
        return index;
    }

    // Generator - Class Pants - functions
    getRandomPantsManufacture(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.manufPants.length);
        return RandomHelper.manufPants[index];
    }

    getRandomPantsModel(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.modelPants.length);
        return RandomHelper.modelPants[index];
    }

    getRandomPantsColor(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.colorPants.length);
        return RandomHelper.colorPants[index];
    }
    getRandomPantsPrice(): number {
        let price: number = Math.floor(Math.random() * (this.maxPantsPrice - this.minPantsPrice + 1) + this.minPantsPrice);
        return price;
    }
    getRandomPantsSize(): number {
        let size: number = Math.floor(Math.random() * (this.maxPantsSize - this.minPantsSize + 1) + this.minPantsSize);
        return size;
    }
    getRandomPockets(): number {
        let size: number = Math.floor(Math.random() * (this.maxPockets - this.minPockets + 1) + this.minPockets);
        return size;
    }
    getRandomJeantsSize(): number {
        let size: number = Math.floor(Math.random() * (this.maxJeansSize - this.minJeansSize + 1) + this.minJeansSize);
        return size;
    }
    getRandomJeantsLength(): number {
        let size: number = Math.floor(Math.random() * (this.maxJeansLength - this.minJeansLength + 1) + this.minJeansLength);
        return size;
    }
    getRandomJeantsWithHoles(): boolean {
        let size: number = Math.floor(Math.random() * 2);
        return (size == 1) ? true : false;
    }
    getRandomShortsLength(): number {
        let size: number = Math.floor(Math.random() * (this.maxShortsLength - this.minShortsLength + 1) + this.minShortsLength);
        return size;
    }

    getRandomShortPrice(): number {
        let price: number = Math.floor(Math.random() * (this.maxShortsPrice - this.minShirtPrice + 1) + this.minShortsPrice);
        return price;
    }

    //Generator - Class Dress and Skirt - functions

    getRandomDressSkirtPrice(): number {
        let price: number = Math.floor(Math.random() * (this.maxPriceDressSkirt - this.minPriceDressSkirt + 1) + this.minPriceDressSkirt);
        return price;
    }
    getRandomSkirtShortLong(): string {
        let style: number = Math.floor(Math.random() * 2);
        return (style == 1) ? "short" : "long";
    }
    getRandomOpenBackDress(): boolean {
        let style: number = Math.floor(Math.random() * 2);
        return (style == 1) ? true : false;
    }
    getRandomtWaist():number {
        let size: number = Math.floor(Math.random() * (this.maxSizeWaist - this.minSizeWaist + 1) + this.minSizeWaist);
        return size;
    }
    getRandomDressLength():number {
        let size: number = Math.floor(Math.random() * (this.maxLengthDress - this.minLengthDress + 1) + this.minLengthDress);
        return size;
    }

    // Generator - Class Shoes function

    getRandomShoeManufacture(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.companyShoes.length);
        return RandomHelper.companyShoes[index];
    }
    getRandomCountryMadeIn():string {
        let country: number = Math.floor(Math.random() * RandomHelper.countryMadeIn.length);
        return RandomHelper.countryMadeIn[country];
    }

    getRandomShoesColor():string {
        let index: number = Math.floor(Math.random() * RandomHelper.colorShoes.length);
        return RandomHelper.colorShoes[index];
    }
    getRandomShoesPrice():number {
        let price: number = Math.floor(Math.random() * (this.maxShoesPrice - this.minShoesPrice + 1) + this.minShoesPrice);
        return price;
    }
    getRandomShoesSize():number {
        let size: number = Math.floor(Math.random() * (this.maxShoesSize - this.minShoesSize + 1) + this.minShoesSize);
        return size;
    }
    getRandomIsLaces(): boolean {
        let laces: number = Math.floor(Math.random() * 2);
        return (laces == 1) ? true : false;
    }
    getRandomTypeOfMaterial():string {
        let index: number = Math.floor(Math.random() * RandomHelper.materialShoes.length);
        return RandomHelper.materialShoes[index];
    }
    getRandomIsInsole(): boolean {
        let insole: number = Math.floor(Math.random() * 2);
        return (insole == 1) ? true : false;
    }
    getRandomSizeHeel():string {
        let index: number = Math.floor(Math.random() * RandomHelper.heelsShoes.length);
        return RandomHelper.heelsShoes[index];
    }

    getRandomProductionDate(): string {
        var today: Date = new Date();
        var year: number = today.getFullYear() - Math.floor(Math.random() * 2);
        var month: number = Math.floor(Math.random() * 11 + 1);
        var day: number = Math.floor(Math.random() * 30 + 1);
        var newdate: string = year + "/" + month + "/" + day;
        
        return newdate;
    }

    //Generator - Class Jackets and Coats - functions

    getRandomThickness():number {
        let size: number = Math.floor(Math.random() * (this.maxSizeThickness - this.minSizeThickness + 1) + this.minSizeThickness);
        return size;
    }
    getRandomIsRainCoat():boolean {
        let rain_coat: number = Math.floor(Math.random() * 2);
        return (rain_coat == 1) ? true : false;
    }

    // Generator - Class Advertisement - functions

    getRandomDiameter():number {
        let diameter: number = Math.floor(Math.random() * (this.maxDiameterHat - this.minDiameterHat + 1) + this.minDiameterHat);
        return diameter;
    }

    getRandomIsAdvertisement(): boolean {
        let advertisement: number = Math.floor(Math.random() * 2);
        return (advertisement == 1) ? true : false;
    }
    getRandomHighTopHat(): number {
        let size: number = Math.floor(Math.random() * (this.maxHigh - this.minHigh + 1) + this.minHigh);
        return size;
    }
    getRandomBeltColor(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.colorsBelt.length);
        return RandomHelper.colorsBelt[index];
    }
    getRandomBuckleColor(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.colorBuckle.length);
        return RandomHelper.colorBuckle[index];
    }
    getRandomBeltPrice(): number {
        let price: number = Math.floor(Math.random() * (this.maxBeltPrice - this.minBeltPrice + 1) + this.minBeltPrice);
        return price;
    }
    getRandomBuckleMaterial(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.materialBuckle.length);
        return RandomHelper.materialBuckle[index];
    }
    getRandomWidthInMillimetrBelt(): number {
        let size: number = Math.floor(Math.random() * (this.maxWidthMillimetrBelt - this.minWidthMillimetrBelt + 1) + this.minWidthMillimetrBelt);
        return size;
    }
    getRandomHeigthBelt(): number {
        let size: number = Math.floor(Math.random() * (this.maxHeightBelt - this.minHeightBelt + 1) + this.minHeightBelt);
        return size;
    }
    getRandomLengthBelt(): number {
        let size: number = Math.floor(Math.random() * (this.maxLengthBelt - this.minLengthBelt + 1) + this.minLengthBelt);
        return size;
    }
    getRandomFrameColor(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.colorOfFrame.length);
        return RandomHelper.colorOfFrame[index];
    }
    getRandomGlassColor(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.colorOfGlass.length);
        return RandomHelper.colorOfGlass[index];
    }
    getRandomSunGlassesPrice(): number {
        let price: number = Math.floor(Math.random() * (this.maxSunGlassesPrice - this.minSunGlassesPrice + 1) + this.minSunGlassesPrice);
        return price;
    }
    getRandomDistanceReadingGlasses(): number {
        let distance: number = Math.floor(Math.random() * (this.maxDistance - this.minDistance + 1) + this.minDistance);
        return distance;
    }
    getRandomGlassesManufacture(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.manufGlasses.length);
        return RandomHelper.manufGlasses[index];
    }

    getRandomGlassesModel(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.modelGlasses.length);
        return RandomHelper.modelGlasses[index];
    }
    getRandomBeltManufacture(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.manufBelt.length);
        return RandomHelper.manufBelt[index];
    }

    getRandomBeltModel(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.modelBelt.length);
        return RandomHelper.modelBelt[index];
    }
    getRandomCasketManufacture(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.manufCasket.length);
        return RandomHelper.manufCasket[index];
    }
    getRandomCasketModel(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.modelCasket.length);
        return RandomHelper.modelCasket[index];
    }
    getRandomTopHatModel(): string {
        let index: number = Math.floor(Math.random() * RandomHelper.modelTopHat.length);
        return RandomHelper.modelTopHat[index];
    }
    getRandomTopHatManufacture(): string {
        return "SilkTopHats";
    }
    getRandomHatPrice(): number {
        let price: number = Math.floor(Math.random() * (this.maxHatPrice - this.minHatPrice + 1) + this.minHatPrice);
        return price;
    }
}





