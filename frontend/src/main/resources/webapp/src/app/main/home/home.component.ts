import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './service/home.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  albumDataSource: HlItem[] = [];
  artistDataSource: HlItem[] = [];
  private subscriptions = new Subscription();
  
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private homeService: HomeService
  ) {}
  ngOnInit() {
    // Album declarations
     let meteora: HlItem = { key:{ id: 1, itemType: "album"}, row1: "Meteora", row2: "Linkin Park" };
     let hybridTheory: HlItem = { key:{ id: 2, itemType: "album"}, row1: "Hybrid Theory", row2: "Linkin Park" };
     let minutesToMidnight: HlItem = { key:{ id: 3, itemType: "album"}, row1: "Minutes to Midnight", row2: "Linkin Park" };
     let aThousandSuns: HlItem = {key: { id: 4, itemType: "album"}, row1: "A Thousand Suns", row2: "Linkin Park"};
    
     let hotFuss: HlItem = {key: {id: 5, itemType: "album"}, row1: "Hot Fuss", row2: "The Killers"};
     this.albumDataSource.push(meteora,hybridTheory,minutesToMidnight,aThousandSuns, hotFuss);

  
     //Artist declarations:
     let linkinPark: HlItem = { key: {id: 1, itemType: "artist"}, row1: "Linkin Park"};
     let threeDaysGrace: HlItem = { key: {id: 2, itemType: "artist"}, row1: "Three Days Grace"};
     let theKillers: HlItem = {key: {id: 3, itemType: "artist"}, row1: "The Killers"};

     this.artistDataSource.push(linkinPark, threeDaysGrace, theKillers);
    

  }
  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
  getAlbums() {
    this.subscriptions.add(this.homeService.newestAlbums().subscribe(albums =>  { this.albumDataSource = albums && albums['data'] ? albums['data'] : []; console.log(this.albumDataSource)}));
  
  }
  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  openAlbum(){
    this.router.navigate(['../../', 'album'], {relativeTo: this.actRoute});
  }
}
