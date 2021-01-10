export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desk: string, imagePath: string){
        this.name = name;
        this.description = desk;
        this.imagePath = imagePath;
    }
}