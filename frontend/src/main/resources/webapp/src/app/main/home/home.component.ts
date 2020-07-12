import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './service/home.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albumDataSource?: HlItem[] = [];
  artistDataSource?: HlItem[] = [];
  
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private homeService: HomeService
  ) {}
  ngOnInit() {
  /*this.homeService.newestAlbums().subscribe( album=> {
    album["data"].array.forEach(element => 
      this.albumDataSource.push(element)
      )
    });*/
   /* this.homeService.newestAlbums().subscribe( album=> {
      album["data"].forEach(element => {
        this.albumDataSource.push(element);
        console.log(element);
      }
        )
      });*/
      this.homeService.newestAlbums().subscribe( album=> {
        album["data"].forEach(element => {
          let date:string = String(this.createDate(element["release_year"])); 
          console.log(date);
          let genericItem = {
            id: element["album_id"],
            itemType: "album",
            row1: element["title"],
            row2: date
          }
          
          
          this.albumDataSource.push(genericItem);
          console.log(this.albumDataSource);
        }
          )
        });
      this.homeService.newestArtists().subscribe( artist => {
        artist["data"].forEach(element => {
          let genericItem = {
            id: element["artist_id"],
            itemType: "artist",
            row1: element["name"]
          }
          this.artistDataSource.push(genericItem);
        })
      })
    /*let meteora: HlItem = {id: 1, itemType: "album", row1: "Hybrid Theory", row2: "Linkin Park"};
    let hybridTheory: HlItem =  {id: 2, itemType: "album", row1: "Hybrid Theory", row2: "Linkin Park"};
    let minutesToMidnight: HlItem = {id: 3, itemType: "album", row1: "Minutes to Midnight", row2: "Linkin Park"};
    
    this.albumDataSource.push(meteora,hybridTheory,minutesToMidnight);
    console.log(this.albumDataSource);*/
   /*this.dataArray.forEach(item => {
    let cHlItem: HlItem;
    cHlItem = {id: item.id, itemType: "album", row1: item.title, row2: String(item.creationYear)};

    this.albumDataSource.push(cHlItem)
   })*/
  } 
  parseAlbumArray(album:any){
    
  }
  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  createDate(epoch: String){
    
    let d = new Date(Number(epoch))
    console.log(d.getFullYear())
    return d.getFullYear()
  }
}
