import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PlaylistService } from './service/playlist.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    PlaylistRoutingModule,
    SharedModule
  ],
  declarations: [PlaylistComponent],
  providers: [
    PlaylistService
  ]
})
export class PlaylistModule { }
