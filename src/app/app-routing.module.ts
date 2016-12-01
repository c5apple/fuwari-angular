import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './articles/top.component';
import { WhatIsAngularComponent } from './articles/what-is-angular.component';
import { EcoSystemComponent } from './articles/eco-system.component';
import { InstallComponent } from './articles/install.component';
import { NewProjectComponent } from './articles/new-project.component';
import { TodosComponent } from './articles/todos.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'top', component: TopComponent },
  { path: 'what-is-angular.html', component: WhatIsAngularComponent },
  { path: 'eco-system.html', component: EcoSystemComponent },
  { path: 'install.html', component: InstallComponent },
  { path: 'new-project.html', component: NewProjectComponent },
  { path: 'todos.html', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
