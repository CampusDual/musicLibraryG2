import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../service/home.service'
@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  @Input() title: string;
  @Input() restInput: string;
  items: HlItem[] = [];
  @Input() displayType: string;
  constructor(private homeService: HomeService ) { 

  }

  ngOnInit() {
    //Test components
    console.log(this.homeService.newestAlbums());
    let meteora: HlItem;
    let hybridTheory: HlItem;
    let minutesToMidnight: HlItem;

    meteora = {key: {id: 1, itemType: "album"}, row1: "Meteora", row2: "Linkin Park"};
    hybridTheory = {key: {id: 2, itemType: "album"}, row1: "Hybrid Theory", row2: "Linkin Park"};
    minutesToMidnight = {key: {id: 3, itemType: "album"}, row1: "Minutes to Midnight", row2: "Linkin Park"};
    
    this.items.push(meteora,hybridTheory,minutesToMidnight);
  }
}
