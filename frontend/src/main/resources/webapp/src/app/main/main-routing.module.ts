import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { ExploreModule } from './explore/explore.module';
import { MylistsModule } from './mylists/mylists.module';
import { TestpageModule } from './testpage/testpage.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadExploreModule(){
  return ExploreModule
}
export function loadMylistsModule(){
  return MylistsModule
}

export function loadTestPageModule(){
  return TestpageModule
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      { path: 'explore', loadChildren: loadExploreModule},
      { path: 'mylists', loadChildren: loadMylistsModule},
      { path: 'testpage', loadChildren: loadTestPageModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
