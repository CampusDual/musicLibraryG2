import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HorizontalListComponent } from '../../shared/horizontal-list/horizontal-list.component';
import { ListItemComponent } from '../../shared/horizontal-list/list-item/list-item.component';
import { HomeService } from './service/home.service';
@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
