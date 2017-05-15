import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { EcoSystemComponent } from './eco-system/eco-system.component';
import { InstallComponent } from './install/install.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TodosComponent } from './todos/todos.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {
        path: 'what-is-angular.html',
        component: WhatIsAngularComponent,
        data: { title: 'Angularって何？ - ふわりAngular' }
      },
      {
        path: 'eco-system.html',
        component: EcoSystemComponent,
        data: { title: 'Angularエコシステム - ふわりAngular' }
      },
      {
        path: 'install.html',
        component: InstallComponent,
        data: { title: '必要なツールをインストールしよう - ふわりAngular' }
      },
      {
        path: 'new-project.html',
        component: NewProjectComponent,
        data: { title: 'プロジェクトを作ってみよう - ふわりAngular' }
      },
      {
        path: 'todos.html',
        component: TodosComponent,
        data: { title: 'TODOリストを作ってみよう - ふわりAngular' }
      },
      {
        path: 'service.html',
        component: ServiceComponent,
        data: { title: 'サービスを使おう - ふわりAngular' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ArticlesRoutingModule { }
