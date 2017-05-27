import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';

import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { EcoSystemComponent } from './eco-system/eco-system.component';
import { InstallComponent } from './install/install.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TodosComponent } from './todos/todos.component';
import { ServiceComponent } from './service/service.component';

import { ArticleHeaderComponent } from '../shared/article-header/article-header.component';
import { MyAdsenseModule } from '../shared/adsense/my-adsense.module';

import { NextNavModule } from '../shared/next-nav/next-nav.module';
import { SideNavModule } from '../shared/side-nav/side-nav.module';

import { ArticlesRoutingModule } from './articles.routes';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NextNavModule,
    SideNavModule,
    MyAdsenseModule,
  ],
  declarations: [
    ArticlesComponent,
    ArticleHeaderComponent,
    WhatIsAngularComponent,
    EcoSystemComponent,
    InstallComponent,
    NewProjectComponent,
    TodosComponent,
    ServiceComponent
  ],
  providers: [],
})
export class ArticlesModule { }
