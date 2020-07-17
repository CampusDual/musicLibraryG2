import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { UserService } from 'app/main/user/service/user.service';
import { RegisterSuccessComponent } from './register-success/register-success.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent, RegisterSuccessComponent],
  providers: [
    UserService
  ]
})
export class RegisterModule { }
