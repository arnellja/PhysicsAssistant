import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorProjectilesComponent } from './vector-projectiles.component';

describe('VectorProjectilesComponent', () => {
  let component: VectorProjectilesComponent;
  let fixture: ComponentFixture<VectorProjectilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorProjectilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorProjectilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
