import { Component, OnInit, Input } from '@angular/core';
import { DIRECTORIES } from 'app/app.config';

@Component({
  selector: 'app-gl-item',
  templateUrl: './gl-item.component.html',
  styleUrls: ['./gl-item.component.scss']
})
export class GridListItemComponent implements OnInit {
  @Input() item: any;
  imagePath:string;
  constructor() { }

  ngOnInit() {
    this.imagePath = this.buildImagePath();
  }
  buildImagePath(){
    let imagePath: string;
    
    switch(this.item.key.itemType){
      case "album": 
        imagePath = DIRECTORIES.albums;
        console.log(imagePath);
      break;
      case "artist":
        imagePath = DIRECTORIES.artists;
      break;
    }
    imagePath += String("/"+this.item.key.id+"_cover.jpg");
    console.log(imagePath);
   
    return imagePath;
  }
}
