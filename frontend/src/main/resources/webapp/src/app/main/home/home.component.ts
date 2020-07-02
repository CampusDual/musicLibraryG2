import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './service/home.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albumDataSource?: HlItemAlbum[];
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private homeService: HomeService
  ) {}
  public dataArray: Album[];
  ngOnInit() {
    
  

   this.homeService.newestAlbums().subscribe( album=> {
    album["data"].array.forEach(element => 
      this.albumDataSource.push(element)
      )
    });


   console.log(this.dataArray);
   this.dataArray.forEach(item => {
    let cHlItem: HlItem;
    cHlItem = {key: {id: item.album_id, itemType: "album"}, row1: item.title, row2: String(item.release_year)};

    this.albumDataSource.push(cHlItem)
   })
  }
  parseAlbumArray(album:any){
    
  }
  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  openAlbum(){
    this.router.navigate(['../../', 'album'], {relativeTo: this.actRoute});
  }
}
