import { hlItem } from "./hl-item.model";
import { Input } from "@angular/core";

export class album extends hlItem {
    public imagePath: string;

    constructor(title: string, artist: number, imagePath: string){
        super(title, imagePath);
       this.argument1 = String(title);
       this.argument2 = String(artist);
    
    }
}