import { Component, OnInit, Input } from '@angular/core';
import { DIRECTORIES } from 'app/app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input()album: Album;
  id: number;
  private route: ActivatedRoute;
  imagePath: string;
  nTracks: number;
  cumulativeDuration: string;
  dataSource: song[];
  constructor(private _Activatedroute:ActivatedRoute) { }


  buildImagePath(){
    let imagePath: string; 
    imagePath = String(DIRECTORIES.albums+"/"+this.album.id+"_cover.png");
    console.log(imagePath);
    return imagePath;
  }
  ngOnInit() {

    this._Activatedroute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });

    let meteora: Album; 
    meteora = { 
      id: 1,
      title: "Meteora",
      artist: "Linkin Park", 
      creationYear: 2003, 
      songList: [
        {track: 1, title: "Foreword", duration: 13},
        {track: 2, title: "Don't Stay", duration: 188},
        {track: 3, title: "Somewhere I Belong", duration: 214},
        {track: 4, title: "Lying from You", duration: 175},
        {track: 5, title: "Hit the Floor", duration: 164},
        {track: 6, title: "Easier to Run", duration: 204},
        {track: 7, title: "Faint", duration: 163},
        {track: 8, title: "Figure.09", duration: 198},
        {track: 9, title: "Breaking the Habit", duration: 197},
        {track: 10, title: "From the Inside", duration: 174},
        {track: 11, title: "Nobody's Listening", duration: 179},
        {track: 12, title: "Session", duration: 144},
        {track: 13, title: "Numb", duration: 186}
      ]
      }
      let hybridTheory = {
        id: 2,
        title: "Hybrid Theory",
        artist: "Linkin Park",
        creationYear: 2000,
        songList: [
        {track: 1, title: "Foreword", duration: 13},
        {track: 2, title: "Don't Stay", duration: 188},
        {track: 3, title: "Somewhere I Belong", duration: 214},
        {track: 4, title: "Lying from You", duration: 175},
        {track: 5, title: "Hit the Floor", duration: 164},
        {track: 6, title: "Easier to Run", duration: 204},
        {track: 7, title: "Faint", duration: 163},
        {track: 8, title: "Figure.09", duration: 198},
        {track: 9, title: "Breaking the Habit", duration: 197},
        {track: 10, title: "From the Inside", duration: 174},
        {track: 11, title: "Nobody's Listening", duration: 179},
        {track: 12, title: "Session", duration: 144},
        {track: 13, title: "Numb", duration: 186}
        
        ]
      }
      let minutesToMidnight = {
        id: 3,
        title: "Minutes to Midnight",
        artist: "Linkin Park",
        creationYear: 2007,
        songList: [
          {track: 1, title: "Wake", duration: 101},
          {track: 2, title: "Given Up", duration: 189},
          {track: 3, title: "Leave Out All The Rest", duration: 209},
          {track: 4, title: "Bleed It Out", duration: 205},
          {track: 5, title: "Shadow of the Day", duration: 290},
          {track: 6, title: "What I've Done", duration: 206},
          {track: 7, title: "Hands Held High", duration: 233},
          {track: 8, title: "No More Sorrow", duration: 222},
          {track: 9, title: "Valentine's Day", duration: 207},
          {track: 10, title: "In Between", duration: 207},
          {track: 11, title: "In Pieces", duration: 218},
          {track: 12, title: "The Little Things Give You Away", duration: 384}
        ]
      }

      let aThousandSuns = {
        id: 4,
        title: "A Thousand Suns",
        artist: "Linkin Park",
        creationYear: 2010,
        songList: [
          {track: 1, title: "The Requiem", duration: 121},
          {track: 2, title: "The Radiance", duration: 58},
          {track: 3, title: "Burning in the Skies", duration: 253},
          {track: 4, title: "Empty Spaces", duration: 18},
          {track: 5, title: "When They Come for Me", duration: 293},
          {track: 6, title: "Robot Boy", duration: 269},
          {track: 7, title: "Jornada Del Muerto", duration: 95},
          {track: 8, title: "Waiting for the End", duration: 232},
          {track: 9, title: "Blackout", duration: 279},
          {track: 10, title: "Wretches and Kings", duration: 271},
          {track: 11, title: "Wisdom, Justice and Love", duration: 99},
          {track: 12, title: "Iridescent", duration: 297},
          {track: 13, title: "Fallout", duration: 83},
          {track: 14, title: "The Catalyst", duration: 340},
          {track: 15, title: "The Messenger", duration: 182}
        ]
      }

      let hotFuss = {
        id: 5,
        title: "Hot Fuss",
        artist: "The Killers",
        creationYear: 2004,
        songList: [
          {track: 1, title: "Jenny Was a Friend of Mine", duration: 244},
          {track: 2, title: "Mr Brightside", duration: 222},
          {track: 3, title: "Smile Like You Mean It", duration: 234},
          {track: 4, title: "Somebody Told Me", duration: 197},
          {track: 5, title: "All These Things That I've Done", duration: 301},
          {track: 6, title: "Andy, You're a Star", duration: 204},
          {track: 7, title: "On Top", duration: 258},
          {track: 8, title: "Change Your Mind", duration: 190},
          {track: 9, title: "Believe Me Natalie", duration: 306},
          {track: 10, title: "Midnight Show", duration: 242},
          {track: 11, title: "Everything Will Be Alright", duration: 345}
         
        ]
      }
      console.log(this.id);
      switch(Number(this.id)){
        case 1: 
        console.log("check");
          this.album = meteora;
        break;
        case 2:
          this.album = hybridTheory;
          break;
        case 3:
          this.album = minutesToMidnight;
          break;
        case 4:
          this.album = aThousandSuns;
          break;
        case 5:
          this.album = hotFuss;
          break;
      }
      //Header setters
        this.imagePath = this.buildImagePath();
        this.nTracks = this.album.songList.length;
          //cumulative track length
        let cumulativeDuration: number = 0;
        for(let song of this.album.songList){
          
          cumulativeDuration += song.duration;
        }

        
        this.cumulativeDuration = String(Math.trunc(cumulativeDuration/60));
        console.log(this._Activatedroute.params.value.id);
    }
    //Returns track duration in mm:ss format.
    
  }