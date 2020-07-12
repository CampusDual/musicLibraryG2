import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { ListItemComponent } from './horizontal-list/list-item/list-item.component';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
 
  declarations: [
    HorizontalListComponent,
    ListItemComponent
  ],
  exports: [
    CommonModule,
    HorizontalListComponent,
    ListItemComponent
  ]
})
export class SharedModule { }
