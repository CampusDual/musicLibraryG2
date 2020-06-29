import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestpageHomeComponent } from './testpage-home/testpage-home.component';


  const routes: Routes = [{
    path: '',
    component: TestpageHomeComponent
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestpageRoutingModule { }
