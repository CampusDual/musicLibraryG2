import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { MatAlbumTable } from './mat-album-table/mat-album-table.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AlbumService } from './service/album.service';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AlbumRoutingModule,
    SharedModule
  ],
  declarations: [
    AlbumComponent,
    MatAlbumTable
  ],
  providers: [
    AlbumService
  ]
})
export class AlbumModule { }
