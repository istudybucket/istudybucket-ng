import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLandingComponent } from './fake-landing.component';

describe('FakeLandingComponent', () => {
  let component: FakeLandingComponent;
  let fixture: ComponentFixture<FakeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
