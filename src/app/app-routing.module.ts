import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './articles/top.component';
import { WhatIsAngularComponent } from './articles/what-is-angular.component';
import { EcoSystemComponent } from './articles/eco-system.component';

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
