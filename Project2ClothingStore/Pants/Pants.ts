abstract class Pants extends Item {
    _colorPants: string;
    randomClass: RandomHelper = new RandomHelper();


    constructor(manuf: string, model: string) {
        super(manuf, model);
        this._colorPants = this.randomClass.getRandomPantsColor();


    }
}