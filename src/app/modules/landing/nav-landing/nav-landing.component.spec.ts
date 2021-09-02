import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLandingComponent } from './nav-landing.component';

describe('NavLandingComponent', () => {
  let component: NavLandingComponent;
  let fixture: ComponentFixture<NavLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
