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
    this.items.push(new album("Meteora",2007,"https://img.discogs.com/sRWxnWSM-6FiyZ9Pr63WHUtbVE4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9504418-1481747252-9282.jpeg.jpg"))
    this.items.push(new album("Hybrid Theory",2002,"https://images-na.ssl-images-amazon.com/images/I/51oAUyxkxYL.jpg"))
  }

}
