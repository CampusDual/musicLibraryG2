import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { MatAlbumTable } from './mat-album-table/mat-album-table.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AlbumRoutingModule
  ],
  declarations: [
    AlbumComponent,
    MatAlbumTable
  ]
})
export class AlbumModule { }
