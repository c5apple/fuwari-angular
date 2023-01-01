import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextNavComponent } from './next-nav.component';

describe('NextNavComponent', () => {
  let component: NextNavComponent;
  let fixture: ComponentFixture<NextNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
