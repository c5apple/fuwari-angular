import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsenseModule } from 'ng2-adsense';

import { ArticlesComponent } from './articles.component';

import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { EcoSystemComponent } from './eco-system/eco-system.component';
import { InstallComponent } from './install/install.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TodosComponent } from './todos/todos.component';
import { ServiceComponent } from './service/service.component';

import { ArticleHeaderComponent } from '../shared/article-header/article-header.component';
import { MyAdsenseComponent } from '../shared/adsense/my-adsense.component';

import { NextNavModule } from '../shared/next-nav/next-nav.module';

import { ArticlesRoutingModule } from './articles.routes';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4398400415874126',
      adSlot: 7651079037
    }),
    NextNavModule
  ],
  declarations: [
    ArticlesComponent,
    MyAdsenseComponent,
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
