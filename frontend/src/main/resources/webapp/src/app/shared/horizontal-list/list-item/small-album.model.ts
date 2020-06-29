import { hlItem } from "./hl-item.model";
import { Input } from "@angular/core";

export interface album extends hlItem {
    //non-mandatory: field?
    imagePath: string;
    
}