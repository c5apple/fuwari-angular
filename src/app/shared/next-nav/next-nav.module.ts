import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextNavComponent } from './next-nav.component';

import { ArticlesRoutingModule } from '../../articles/articles.routes';

@NgModule({
  imports: [
    CommonModule
    , ArticlesRoutingModule
  ],
  declarations: [
    NextNavComponent
  ],
  providers: [],
  exports: [
    NextNavComponent
  ]
})
export class NextNavModule { }
