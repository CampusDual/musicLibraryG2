import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from 'ontimize-web-ngx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private user: UserInfo;
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
    
  ) {}

  ngOnInit() {
  }
  goToUserPanel(){
    this.router.navigate(['/main/', String('user')])
  }
}
