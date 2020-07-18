import { Component, OnInit } from '@angular/core';
import { ArtistService } from './service/artist.service';
import { AlbumService } from '../album/service/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: number;
  bannerPath: string;
  artist: artist;
  albumsDataSource: HlItem[] = [];
  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) { }
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {this.id = paramsId.id})
    this.parseArtist()
    let meteora: HlItem = {id: 1, itemType: "album", row1: "Meteora", row2: "2000"};
    let hybridTheory: HlItem =  {id: 2, itemType: "album", row1: "[Hybrid Theory]", row2: "2003"};
    let minutesToMidnight: HlItem = {id: 3, itemType: "album", row1: "Minutes to Midnight", row2: "2007"};
    let aThousandSuns: HlItem = {id: 4, itemType: "album", row1: "A Thousand Suns", row2: "2010"};
    this.albumsDataSource.push(meteora,hybridTheory,minutesToMidnight,aThousandSuns);
  }
  parseArtist() {
    this.artistService.getArtist(this.id).subscribe(element => {
      console.log(element);
      this.artist = element["data"];

      console.log(this.artist);
    })
  }

}
