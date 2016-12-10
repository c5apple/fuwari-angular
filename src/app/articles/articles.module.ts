import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsenseModule } from 'ng2-adsense';

import { ArticlesComponent } from './articles.component';

import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { EcoSystemComponent } from './eco-system/eco-system.component';
import { InstallComponent } from './install/install.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { TodosComponent } from './todos/todos.component';

import { ArticleHeaderComponent } from '../shared/article-header/article-header.component';
import { AdsenseComponent } from '../shared/adsense/adsense.component';
import { NextNavComponent } from '../shared/next-nav/next-nav.component';

import { ArticlesRoutingProviders, ArticlesRoutingModule } from './articles.routes';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    AdsenseModule
  ],
  declarations: [
    ArticlesComponent,
    AdsenseComponent,
    ArticleHeaderComponent,
    NextNavComponent,
    WhatIsAngularComponent,
    EcoSystemComponent,
    InstallComponent,
    NewProjectComponent,
    TodosComponent
  ],
  providers: [
    ArticlesRoutingProviders
  ],
})
export class ArticlesModule { }
