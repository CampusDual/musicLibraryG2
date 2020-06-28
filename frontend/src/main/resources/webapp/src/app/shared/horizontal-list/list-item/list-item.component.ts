import { Component, OnInit, Input } from '@angular/core';
import { hlItem } from './hl-item.model';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: hlItem;
  constructor() { }

  ngOnInit() {
    console.log(this.item.title);
  }

}
