import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyplaylistsRoutingModule } from './myplaylists-routing.module';
import { MyplaylistsComponent } from './myplaylists.component';

@NgModule({
  imports: [
    CommonModule,
    MyplaylistsRoutingModule
  ],
  declarations: [MyplaylistsComponent]
})
export class MyplaylistsModule { }
