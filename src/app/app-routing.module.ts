import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top/top.component';
import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { EcoSystemComponent } from './eco-system/eco-system.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'top', component: TopComponent },
  { path: 'what-is-angular.html', component: WhatIsAngularComponent },
  { path: 'eco-system.html', component: EcoSystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
