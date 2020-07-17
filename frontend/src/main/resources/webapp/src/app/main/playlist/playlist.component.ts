import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './service/playlist.service';
import { DIRECTORIES } from 'app/app.config';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist: playlist;
  imagePath:string;
  nTracks: number; 
  duration: number;
  date: string;
  constructor(
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
     this.playlist = {
      id: 1,
      title: "2000's hits",
      description: "Hits from the 2000s",
      creator: "Manuel Santamariña",
      date: "16-07-2020",
      songs: [
        {track: 1, title: "Foreword",duration: 13},
        {track: 2, title: "Don't Stay", duration: 247},
        {track: 3, title: "Believe Me Natalie", duration: 224},
        {track: 4, title: "All These Things That I've Done", duration: 240}
      ]
  }
  let songs: song[] = [{track: 1, title: "Foreword", duration: 13},
  {track: 2, title: "Don't Stay", duration: 247},
  {track: 3, title: "Somewhere I Belong", duration: 300},
  {track: 4, title: "Believe Me Natalie", duration: 124}]
  ;

  this.playlist.songs = songs;
  this.nTracks = this.playlist.songs.length;
  this.imagePath = this.buildImagePath();

  this.duration = this.calculateDuration();
}
buildImagePath(){
  let imagePath: string; 
  imagePath = String(DIRECTORIES.playlists+"/"+this.playlist.id+"_cover.png");
  console.log(imagePath);
  return imagePath;
}

calculateDuration(){
  let cumulativeDuration: number = 0;
        for(let song of this.playlist.songs){
          
          cumulativeDuration += song.duration;
          console.log(cumulativeDuration);
        }
        return Math.floor(cumulativeDuration/60);
      }

}