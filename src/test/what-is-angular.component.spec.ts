/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { WhatIsAngularComponent } from '../app/articles/what-is-angular/what-is-angular.component';

@Component({
  selector: 'ads',
  template: ''
})
class AdsenseWrapperComponent { }

describe('WhatIsAngularComponent', () => {
  let component: WhatIsAngularComponent;
  let fixture: ComponentFixture<WhatIsAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WhatIsAngularComponent,
        AdsenseWrapperComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
