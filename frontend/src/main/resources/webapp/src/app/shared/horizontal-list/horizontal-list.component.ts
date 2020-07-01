import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  @Input() title: string;
  items: HlItem[] = [];
  @Input() displayType: string;
  constructor() { 

  }

  ngOnInit() {
    //Test components
    
    let meteora: HlItem;
    let hybridTheory: HlItem;
    let minutesToMidnight: HlItem;

    meteora = {key: {id: 1, itemType: "album"}, row1: "Meteora", row2: "Linkin Park"};
    hybridTheory = {key: {id: 2, itemType: "album"}, row1: "Hybrid Theory", row2: "Linkin Park"};
    minutesToMidnight = {key: {id: 3, itemType: "album"}, row1: "Minutes to Midnight", row2: "Linkin Park"};
    
    this.items.push(meteora,hybridTheory,minutesToMidnight);
  }
}
