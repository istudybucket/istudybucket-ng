import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBoxComponent } from './form-box.component';

describe('FormBoxComponent', () => {
  let component: FormBoxComponent;
  let fixture: ComponentFixture<FormBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
