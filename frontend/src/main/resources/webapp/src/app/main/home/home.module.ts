import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { ListItemComponent } from './horizontal-list/list-item/list-item.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album/album.component';
@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HorizontalListComponent,
    ListItemComponent,
    AlbumListComponent,
    AlbumComponent
  ]
})
export class HomeModule { }
