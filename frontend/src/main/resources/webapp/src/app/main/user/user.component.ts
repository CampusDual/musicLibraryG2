import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './service/user.service';
import { getMaxListeners } from 'process';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user:user;
  deleteText: string;
  deletingAccountState:boolean = false;
  errorOnDeleteInput: boolean;
  constructor( 
    private userService:UserService) {
   
   }

  ngOnInit() {
    this.userService.getUserByEmail('a@gmail.com').subscribe( user => 
      user["data"].forEach(element => {
        console.log(element)
        this.user = element;
      }))

      console.log(this.user);
  }
  accountDeletionStart(){
    this.deletingAccountState = true;
  }
  updateUserDetails(){
    
    let userRequestBody = {
      "filter":{
       "user_email" : "a@gmail.com"
      },
         "data": {
            "user_name":this.user.user_name,
            "user_surname":this.user.user_surname,
            "user_password":this.user.user_password,
            "user_email": this.user.user_email
         }
  }
  this.userService.updateUser(userRequestBody).subscribe( response => 
    console.log(response));
  
}

  deleteAccount(){
    
    if (this.deleteText === "DELETE"){

    }else{ 
      this.errorOnDeleteInput = true;
    }
  }
}
