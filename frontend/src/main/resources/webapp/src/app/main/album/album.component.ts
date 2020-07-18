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