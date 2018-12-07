class  Dimensions {
    private length: number;
    private width: number;
    private height: number;

    set updateLength(len: number) {
        this.length = len;
    }
    set updateWidth(wd: number) {
        this.width = wd;
    }
    set updateHeight(hg: number) {
        this.height = hg;
    }

    get updateLength(): number {
        return this.length;
    }
    get updateWidth(): number {
       return  this.width;
    }
    get updateHeight(): number {
        return this.height;
    }
}