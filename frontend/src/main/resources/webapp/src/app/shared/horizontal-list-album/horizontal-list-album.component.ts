import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list-album',
  templateUrl: './horizontal-list-album.component.html',
  styleUrls: ['./horizontal-list-album.component.scss']
})
export class HorizontalListAlbumComponent implements OnInit {
  @Input() title: string;
  @Input() dataSource: HlItemAlbum[];
  @Input() style: string;

  ngOnInit() {
    //Test components
    console.log("check");
    console.log(this.dataSource);
  }

  test() {
    
  }
}
