import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/main/user/service/user.service';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: user;
  confirmationPassword: string; 
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private userService: UserService
    ) {}

  ngOnInit() {
    this.user = {
      user_name: "",
      user_surname: "",
      user_email: "",
      user_birth_date: 0,
      user_creation_date: 0,
      user_password: ""
    }
  }
  register(){
    console.log(this.user);
    
    //password validation
    if(this.user.user_password === this.confirmationPassword){
      this.userService.insertUser(this.user).subscribe( response => 
        console.log(response));
      this.registerSuccess();
    }else{

    }
  }
  getErrorMessage(){

  }
  registerSuccess(){
    this.router.navigate(['./', 'success'], { relativeTo: this.actRoute });
  }
}
