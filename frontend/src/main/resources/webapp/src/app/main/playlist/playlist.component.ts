import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './service/playlist.service';
import { DIRECTORIES } from 'app/app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist: playlist = {title: "", creator: "", date: "", description: ""}
  date: string;
  id: number;
  imagePath: string;
  nTracks: number;
  cumulativeDuration: string;
  dataSource: song[] = [];
  constructor(
    private playlistService: PlaylistService,
    private _Activatedroute:ActivatedRoute
  ) { }
  ngOnInit() {

   this._Activatedroute.params.subscribe(paramsId => {this.id = paramsId.id})
   this.imagePath = String(DIRECTORIES.playlists+"/"+this.id+"_cover.png");
   this.parsePlaylist();
   
  
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


    parsePlaylist(){
      this.playlistService.getPlaylist(this.id).subscribe( playlist => {
        this.playlist["title"] = playlist["data"][0]["name_playlist"];
        console.log(this.playlist.title);
        this.playlist["creator"] = playlist["data"][0]["name_artist"];
        this.playlist["date"] = String((new Date(playlist["data"][0]["creation_date"]).getFullYear());
      let songList: song[] = [];
      playlist["data"].forEach(element => {
        console.log(element);
        let currentSong: song = {
          track: element["track_order"],
          title: element["name"],
          duration: element["duration"]
        }
        songList.push(currentSong);
      });

      this.dataSource = songList;

      //songlist operations
      this.nTracks = this.dataSource.length;
      let cumulativeDuration = 0;
      this.dataSource.forEach( song => {
        cumulativeDuration += song["duration"];
      })

      
      this.cumulativeDuration = String(Math.trunc(cumulativeDuration/60));
      console.log(this.dataSource);
      })
    }
  }