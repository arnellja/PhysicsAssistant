import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationalQuantitiesComponent } from './rotational-quantities.component';

describe('RotationalQuantitiesComponent', () => {
  let component: RotationalQuantitiesComponent;
  let fixture: ComponentFixture<RotationalQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotationalQuantitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationalQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
