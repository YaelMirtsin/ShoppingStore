abstract class Item {
    private _manufacturer: string;
    private _model: string;
    readonly tax: number = 17;

    set updateManufacturer(manuf_name: string) {
        this._manufacturer = manuf_name;
    }

    get updateManufacturer(): string {
        return this._manufacturer;
    }

    set updateModel(model: string) {
        this._model = model;
    }

    get updateModel(): string {
        return this._model;
    }

    constructor(manuf: string, model: string) {
        this.updateManufacturer = manuf;
        this.updateModel = model;
    }
    brand(): string {
        let str = "&nbsp&nbsp&nbsp" + this.updateManufacturer + "&nbsp&nbsp&nbsp" + this.updateModel;
        return str;
    }
    abstract displayDetails(): void;
    abstract displayImage(): void;
    abstract getPriceWithoutVat(): number;
}

