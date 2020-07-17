import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-songlist-table',
  templateUrl: './mat-songlist-table.component.html',
  styleUrls: ['./mat-songlist-table.component.scss']
})
export class MatSonglistTableComponent implements OnInit {
  @Input() dataSource: song[];
  constructor() { }
  displayedColumns: string[] = ['track', 'title', 'duration'];

  ngOnInit() {
    
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
