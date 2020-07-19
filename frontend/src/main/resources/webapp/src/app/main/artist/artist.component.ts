import { Component, OnInit } from '@angular/core';
import { ArtistService } from './service/artist.service';
import { AlbumService } from '../album/service/album.service';
import { ActivatedRoute } from '@angular/router';
import { DIRECTORIES } from 'app/app.config';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: number;
  bannerPath: string;
  artist: artist = {name_artist: "", description: "", creation_year: 0};
  albumsDataSource: HlItem[] = [];
  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) { }
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {this.id = paramsId.id})
    this.parseArtist()
    this.bannerPath = DIRECTORIES.artists+this.id+"_banner.png";

    this.parseAlbumsDataSource();
  }
  parseAlbumsDataSource() {
    this.albumService.getAlbumByArtist(this.id).subscribe( album=> {
      album["data"].forEach(element => {
        let date:string = String(this.createDate(element["release_year"])); 
        console.log(element);
        let genericItem = {
          id: element["album_id"],
          itemType: "album",
          row1: element["title"],
          row2: date
        }
        this.albumsDataSource.push(genericItem);
      })
    })
  }
  parseArtist() {
    this.artistService.getArtist(this.id).subscribe(artist => {
      this.artist["name_artist"] = artist["data"][0]["name_artist"];
      this.artist["description"] = artist["data"][0]["description"];
      this.artist["creation_year"] = artist["data"][0]["creation_year"];
      console.log(this.artist)
    })
  }
  createDate(epoch: String){
    
    let d = new Date(Number(epoch))
    console.log(d.getFullYear())
    return d.getFullYear()
  }
}
