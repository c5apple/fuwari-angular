/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { EcoSystemComponent } from '../app/articles/eco-system/eco-system.component';

@Component({
  selector: 'ads',
  template: ''
})
class AdsenseWrapperComponent { }

describe('EcoSystemComponent', () => {
  let component: EcoSystemComponent;
  let fixture: ComponentFixture<EcoSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EcoSystemComponent,
        AdsenseWrapperComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
