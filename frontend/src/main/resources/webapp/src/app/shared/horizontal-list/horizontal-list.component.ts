import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  @Input() title: string;
  @Input() dataSource: HlItem[];
  @Input() style: string;

  ngOnInit() {
    //Test components
    console.log("check");
    console.log(this.dataSource);
  }

  test() {
    
  }
}
