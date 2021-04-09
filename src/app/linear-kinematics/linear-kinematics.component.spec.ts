import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearKinematicsComponent } from './linear-kinematics.component';

describe('LinearKinematicsComponent', () => {
  let component: LinearKinematicsComponent;
  let fixture: ComponentFixture<LinearKinematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearKinematicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearKinematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
