import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumComponent } from './album/album.component';
import { MatAlbumTable } from './album/mat-album-table/mat-album-table.component';
@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    SearchBarComponent,
    AlbumComponent,
    MatAlbumTable
  ]
})
export class MainModule { }
