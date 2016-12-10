import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { EcoSystemComponent } from './eco-system/eco-system.component';
import { InstallComponent } from './install/install.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      { path: 'what-is-angular.html', component: WhatIsAngularComponent },
      { path: 'eco-system.html', component: EcoSystemComponent },
      { path: 'install.html', component: InstallComponent },
      { path: 'new-project.html', component: NewProjectComponent },
      { path: 'todos.html', component: TodosComponent }
    ]
  }
];

export const ArticlesRoutingProviders: any[] = [];

export const ArticlesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
