import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    OntimizeWebModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
