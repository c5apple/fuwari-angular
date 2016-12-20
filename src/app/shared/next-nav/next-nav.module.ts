import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NextNavComponent } from './next-nav.component';
import { NextNavService } from './next-nav.service';

import { ArticlesRoutingProviders, ArticlesRoutingModule } from '../../articles/articles.routes';

@NgModule({
  imports: [
    CommonModule
    , HttpModule
    , ArticlesRoutingModule
  ],
  declarations: [
    NextNavComponent
  ],
  providers: [
    NextNavService,
    ArticlesRoutingProviders
  ],
  exports: [
    NextNavComponent
  ]
})
export class NextNavModule { }
