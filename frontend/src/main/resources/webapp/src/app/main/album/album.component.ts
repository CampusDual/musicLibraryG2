import { Component, OnInit, Input } from '@angular/core';
import { DIRECTORIES } from 'app/app.config';
import { AlbumService } from './service/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album: Album = { id: 0, title: "", artist: "", creationYear: 0, songList: [] = []}
  id: number;
  imagePath: string;
  nTracks: number;
  cumulativeDuration: string;
  dataSource: song[];
  constructor(
    private albumService: AlbumService,
    private _Activatedroute:ActivatedRoute
  ) { }



  ngOnInit() {

   this._Activatedroute.params.subscribe(paramsId => {this.id = paramsId.id})
   this.imagePath = String(DIRECTORIES.albums+"/"+this.id+"_cover.png");
   this.parseAlbum();
   
  
   /*this.albumService.getAlbum(this.album["id"]).subscribe( album=> {
      
      this.album.title = album["data"]["title"];
      this.album.artist = album["data"]["name_artist"];
      this.album.creationYear = album["data"]["release_year"];

      let songList: song[];
    }*/
     /* album["data"].forEach(element => {
       
        let currentSong: song = {
            track: element["track_number"],
            title: element["name"],
            duration: element["duration"]
        }
        songList.push(currentSong);
        }
       this.album.songList = songList
       console.log(this.album)*/
      
      
      
      
     
    }


    parseAlbum(){
      this.albumService.getAlbum(this.id).subscribe( album => {
        this.album["title"] = album["data"][0]["title"];
        this.album["artist"] = album["data"][0]["name_artist"];
        this.album["creationYear"] = (new Date(album["data"][0]["release_year"])).getFullYear();
      let songList: song[] = [];
      album["data"].forEach(element => {
        let currentSong: song = {
          track: element["track_number"],
          title: element["name"],
          duration: element["duration"]
        }
        songList.push(currentSong);
      });

      this.album["songList"] = songList;

      //songlist operations
      this.nTracks = songList.length;
      let cumulativeDuration = 0;
      for(let song of this.album.songList){
          
        cumulativeDuration += song.duration;

      }

      
      this.cumulativeDuration = String(Math.trunc(cumulativeDuration/60));
      console.log(this.album);
      })
    }
    buildImagePath(){
      let imagePath: string; 
      
      console.log(imagePath);
      return imagePath;
    }
  }
   /* meteora = { 
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
      
    
      this.album = hybridTheory;
      //Header setters
        this.imagePath = this.buildImagePath();
        this.nTracks = this.album.songList.length;
          //cumulative track length
        let cumulativeDuration: number = 0;
        for(let song of this.album.songList){
          
          cumulativeDuration += song.duration;
          console.log(cumulativeDuration);
        }

        
        this.cumulativeDuration = String(Math.trunc(cumulativeDuration/60));
      */
    
    //Returns track duration in mm:ss format.
