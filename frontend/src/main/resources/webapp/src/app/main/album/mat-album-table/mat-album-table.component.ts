import { Component, OnInit, Input } from '@angular/core';


/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'app-mat-album-table',
  templateUrl: './mat-album-table.component.html',
  styleUrls: ['./mat-album-table.component.scss']
})
export class MatAlbumTable implements OnInit {
  @Input()album: Album;
  displayedColumns: string[] = ['track', 'title', 'duration'];
  dataSource = [];

  ngOnInit() {
    this.dataSource = this.album.songList;
  }
  secondsToTrackDuration(seconds: number){
    let duration: string;
    duration = String(Math.floor(seconds / 60) + ":"+ this.padStringLeft(String(seconds % 60), 2, "0"));
    return duration;  
  }
  padStringLeft(inputString: string, targetLength: number, padCharacter: string ){
    let outputString: string = "";
    if (inputString.length <= targetLength){
      outputString = padCharacter.repeat(targetLength - inputString.length) + inputString;  
    }
    return outputString
  }
}
