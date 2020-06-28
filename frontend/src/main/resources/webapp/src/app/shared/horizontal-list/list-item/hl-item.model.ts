export abstract class hlItem {
    public title: string; 
    public imagePath:string;
    public argument1: string;
    public argument2: string;

    constructor(title: string, imagePath: string){
        this.title = title;
        this.imagePath = imagePath;
    }
}