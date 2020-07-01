import { Component, OnInit } from '@angular/core';
import { DIRECTORIES } from 'app/app.config';

@Component({
  selector: 'app-testpage-home',
  templateUrl: './testpage-home.component.html',
  styleUrls: ['./testpage-home.component.scss']
})

export interface artist {
  id: number,
  itemType: artist,
  name: string,

}
export class TestpageHomeComponent implements OnInit {
  artist: artist;
  imagePath: string;
  nTracks: number;
  cumulativeDuration: string;
  dataSource: song[];
  constructor() { }


  buildImagePath(){
    let imagePath: string; 
    imagePath = String(DIRECTORIES.artists+"/"+this.artist.id+"_cover.png");
    console.log(imagePath);
    return imagePath;
  }
  ngOnInit() {
  }
}
