import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearEnergyComponent } from './linear-energy.component';

describe('LinearEnergyComponent', () => {
  let component: LinearEnergyComponent;
  let fixture: ComponentFixture<LinearEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearEnergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
