import { Component, OnInit, Input } from '@angular/core';


/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'app-mat-table-flex',
  templateUrl: './mat-table-flex.component.html',
  styleUrls: ['./mat-table-flex.component.scss']
})
export class MatTableFlexComponent implements OnInit {
  @Input() album: Album;
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
