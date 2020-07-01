import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SearchService } from './service/search.service';
import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './search-home/search-home.component';
import { GridListComponent } from './search-home/grid-list/grid-list.component';
import { GridListItemComponent } from './search-home/grid-list/gl-item/gl-item.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchHomeComponent,
    GridListComponent,
    GridListItemComponent
  ]
})
export class SearchModule {}
