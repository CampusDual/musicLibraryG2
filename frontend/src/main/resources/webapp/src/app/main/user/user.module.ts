import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    OntimizeWebModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
