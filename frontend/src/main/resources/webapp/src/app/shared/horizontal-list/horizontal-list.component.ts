import { Component, OnInit, Input } from '@angular/core';
import { hlItem} from './list-item/hl-item.model';
import { album} from './list-item/album.model';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  items: hlItem[] = [];
  @Input() displayType: string;
  constructor() { 

  }

  ngOnInit() {
    this.items.push(new album("Meteora",2000,"../../../assets/dbImages/albums/1_cover.jpg"));
    this.items.push(new album("Hybrid Theory",2003,"../../../assets/dbImages/albums/2_cover.jpg"));
    this.items.push(new album("Minutes to Midnight",2007,"../../../assets/dbImages/albums/3_cover.jpg"));
    console.log(this.items);
  }

}
