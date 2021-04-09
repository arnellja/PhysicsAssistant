import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalGraviationComponent } from './universal-graviation.component';

describe('UniversalGraviationComponent', () => {
  let component: UniversalGraviationComponent;
  let fixture: ComponentFixture<UniversalGraviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalGraviationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalGraviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
