import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestpageRoutingModule } from './testpage-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TestpageHomeComponent } from './testpage-home/testpage-home.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    TestpageRoutingModule,
    MatButtonModule
  ],
  declarations: [
    TestpageHomeComponent
  ]
})
export class TestpageModule { }
