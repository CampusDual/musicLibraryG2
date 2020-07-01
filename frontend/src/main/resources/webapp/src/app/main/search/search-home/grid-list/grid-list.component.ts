import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  @Input() items: HlItem[] = [];
  constructor() { }

  ngOnInit() {
    let meteora: HlItem;
    let hybridTheory: HlItem;
    let minutesToMidnight: HlItem; 
    meteora = {key: {id: 1, itemType: "album"}, row1: "Meteora", row2:"2000"};
    
    hybridTheory = {key: {id: 2, itemType: "album"}, row1: "Hybrid Theory", row2: "Linkin Park"};
    minutesToMidnight = {key: {id: 3, itemType: "album"}, row1: "Minutes to Midnight", row2: "Linkin Park"};
    this.items.push(meteora, hybridTheory, minutesToMidnight);
  }
  
}
