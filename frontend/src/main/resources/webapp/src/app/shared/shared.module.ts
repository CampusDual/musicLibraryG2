import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { HorizontalListAlbumComponent } from './horizontal-list-album/horizontal-list-album.component';
import { ListItemAlbumComponent } from './horizontal-list-album/list-item-album/list-item-album.component';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { ListItemComponent } from './horizontal-list/list-item/list-item.component';


@NgModule({
  imports: [
    OntimizeWebModule
  ],
 
  declarations: [],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
