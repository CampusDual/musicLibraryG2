import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchNewestAlbums();
  }

  onCreatePost(postData: {title: string; content: string }) {
    this.http.post('localhost:33333/', postData).subscribe(responseData => {
      console.log(responseData);
    })
  }
  onFetchAlbums() {

  }
  private fetchNewestAlbums() {
    this.http.get('localhost:33333/')
    .subscribe(albums => {console.log(albums)})
  }
 
}
