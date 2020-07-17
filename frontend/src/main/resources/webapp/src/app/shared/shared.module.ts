import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { ListItemComponent } from './horizontal-list/list-item/list-item.component';
import { MatSonglistTableComponent } from './mat-songlist-table/mat-songlist-table.component';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
 
  declarations: [
    HorizontalListComponent,
    ListItemComponent,
    MatSonglistTableComponent
  ],
  exports: [
    CommonModule,
    HorizontalListComponent,
    ListItemComponent,
    MatSonglistTableComponent
  ],
  providers: [
  
  ]
})
export class SharedModule { }
