import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavComponent } from './side-nav.component';
import { ArticlesRoutingModule } from '../../articles/articles.routes';
import { MyAdsenseModule } from 'app/shared/adsense/my-adsense.module';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MyAdsenseModule
  ],
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
