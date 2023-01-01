import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoSystemComponent } from './eco-system.component';

describe('EcoSystemComponent', () => {
  let component: EcoSystemComponent;
  let fixture: ComponentFixture<EcoSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
