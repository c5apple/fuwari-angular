/* tslint:disable:no-unused-variable */

import { Component, NgModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-header',
  template: ''
})
class HeaderWrapperComponent { }

const routes: Routes = [
  { path: '', component: HeaderWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingWrapperModule { }

@Component({
  selector: 'app-footer',
  template: ''
})
class FooterWrapperComponent { }

describe('App: FuwariAngular', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderWrapperComponent,
        FooterWrapperComponent
      ],
      imports: [
        AppRoutingWrapperModule
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
