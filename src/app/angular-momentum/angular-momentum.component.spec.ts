import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMomentumComponent } from './angular-momentum.component';

describe('AngularMomentumComponent', () => {
  let component: AngularMomentumComponent;
  let fixture: ComponentFixture<AngularMomentumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMomentumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMomentumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
