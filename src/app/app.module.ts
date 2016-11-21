import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './parts/footer.component';
import { HeaderComponent } from './parts/header.component';
import { TopComponent } from './articles/top.component';
import { WhatIsAngularComponent } from './articles/what-is-angular.component';
import { EcoSystemComponent } from './articles/eco-system.component';
import { AdsenseComponent } from './parts/adsense.component';
import { InstallComponent } from './articles/install.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopComponent,
    WhatIsAngularComponent,
    EcoSystemComponent,
    AdsenseComponent,
    InstallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
