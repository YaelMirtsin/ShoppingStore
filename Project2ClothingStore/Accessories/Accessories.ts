abstract class Accessories extends Item {
   randomClass: RandomHelper = new RandomHelper();


    constructor(manuf: string, model: string) {
        super(manuf, model);
    }
}