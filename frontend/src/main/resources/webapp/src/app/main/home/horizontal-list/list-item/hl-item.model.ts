export abstract class hlItem {
    public title: string; 
    public creation_date: number;
    public imagePath: string;

    constructor(title: string, imagePath: string){
        this.title = title;
        this.imagePath = imagePath;
    }
}