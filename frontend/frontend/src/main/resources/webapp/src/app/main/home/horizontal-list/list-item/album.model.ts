import { hlItem } from "./hl-item.model";

export class album extends hlItem {
    public imagePath: string;

    constructor(title: string, creation_date: number, imagePath: string){
        super(title, imagePath);

       this.creation_date = creation_date;
    
    }
}