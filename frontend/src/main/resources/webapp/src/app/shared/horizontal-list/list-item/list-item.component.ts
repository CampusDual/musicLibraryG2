import { Component, OnInit, Input } from '@angular/core';
import { DIRECTORIES } from '../../../app.config';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: HlItem;
  imagePath: string;

  buildImagePath(){
    let imagePath: string;
    
    switch(this.item.itemType){
      case "album": 
        imagePath = DIRECTORIES.albums;

      break;
      case "artist":
        imagePath = DIRECTORIES.artists;
      break;
    }
    imagePath += String("/"+this.item.id+"_cover.jpg");
  
   
    return imagePath;
  }
  constructor() { }

  ngOnInit() {
    this.imagePath = this.buildImagePath();
  }

 

}
