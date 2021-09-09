import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSidemenuComponent } from './home-sidemenu.component';

describe('HomeSidemenuComponent', () => {
  let component: HomeSidemenuComponent;
  let fixture: ComponentFixture<HomeSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSidemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
