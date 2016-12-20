import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';
import { ArticlesModule } from './articles/articles.module';
import { ArticleLinkComponent } from './top/article-link/article-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    ArticleLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
