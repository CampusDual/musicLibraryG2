import { Component, OnInit, Input } from '@angular/core';
import { DIRECTORIES } from '../../app.config';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from 'app/main/home/service/home.service';
@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  @Input() title: String;
  @Input() dataSource: HlItem[] = [];
  itemType: String = ""; 
  @Input() displayType: String;
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    //Test components


    console.log(this.displayType);
  }
  goToPage(item: HlItem){
    console.log(item.id);
    if(item.itemType === 'album'){
      this.router.navigate(['/main/', String('album'),item.id], {relativeTo: this.actRoute});
    }else if (item.itemType === 'artist'){
      this.router.navigate(['/main/', String('artist'),item.id])
    }else if(item.itemType === 'playlist'){
      this.router.navigate(['/main/', String('playlist'),item.id])
    }
  }
  getDirectory(item: HlItem){
    let directory:string; 
    if (item.itemType === "album"){
      
      directory = DIRECTORIES.albums + "/"+ item.id + "_cover.png"
    } 
    
    if (item.itemType === "artist"){
      
      directory = DIRECTORIES.artists + "/"+ item.id + "_cover.png"
    }
    
    if(item.itemType === "playlist"){
      directory = DIRECTORIES.playlists + "/"+ item.id + "_cover.png"
    }
    return directory;

    
  }
  logTest(){
    console.log(this.dataSource);
    
    console.log(this.itemType);
    console.log(this.dataSource);
    console.log(this.dataSource[1].id);
  }
  
}
