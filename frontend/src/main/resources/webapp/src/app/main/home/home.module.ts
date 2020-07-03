import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './service/home.service';
import { HorizontalListComponent } from 'app/shared/horizontal-list/horizontal-list.component';
import { ListItemComponent } from 'app/shared/horizontal-list/list-item/list-item.component';
@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HorizontalListComponent,
    ListItemComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
