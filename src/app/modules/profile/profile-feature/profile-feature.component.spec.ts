import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFeatureComponent } from './profile-feature.component';

describe('ProfileFeatureComponent', () => {
  let component: ProfileFeatureComponent;
  let fixture: ComponentFixture<ProfileFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
