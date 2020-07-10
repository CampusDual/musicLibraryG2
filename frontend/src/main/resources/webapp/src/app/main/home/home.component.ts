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
  albumDataSource?: HlItem[];
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
    cHlItem = {key: {id: item.id, itemType: "album"}, row1: item.title, row2: String(item.creationYear)};

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
