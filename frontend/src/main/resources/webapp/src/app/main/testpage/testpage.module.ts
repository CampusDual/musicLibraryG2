import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestpageRoutingModule } from './testpage-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TestpageHomeComponent } from './testpage-home/testpage-home.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    TestpageRoutingModule
  ],
  declarations: [
    TestpageHomeComponent
  ]
})
export class TestpageModule { }
