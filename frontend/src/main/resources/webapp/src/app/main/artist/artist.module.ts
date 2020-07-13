import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SharedModule,
    OntimizeWebModule
  ],
  declarations: [
    ArtistComponent
  ]
})
export class ArtistModule { }
