import { Component, OnInit, Input } from '@angular/core';
import { DIRECTORIES } from '../../../app.config';
import { Router, ActivatedRoute} from '@angular/router'
import { HomeService } from 'app/main/home/service/home.service';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: HlItem;
  @Input() style: string;
  imagePath: string;
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private homeService: HomeService
  ) {}
  buildImagePath(){
    let imagePath: string;
    
    switch(this.item.key.itemType){
      case "album": 
        imagePath = DIRECTORIES.albums;

      break;
      case "artist":
        imagePath = DIRECTORIES.artists;
      break;
    }
    imagePath += String("/"+this.item.key.id+"_cover.png");
  
   
    return imagePath;
  }


  ngOnInit() {
    this.imagePath = this.buildImagePath();
    
  }

  goToPage(){
    if(this.item.key.itemType === 'album'){
      this.router.navigate(['../../', String('album'),this.item.key.id], {relativeTo: this.actRoute});
    }else if (this.item.key.itemType === 'artist'){
      this.router.navigate(['../../', String('artist'),this.item.key.id])
    }
  }

}
