import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketChatComponent } from './bucket-chat.component';

describe('BucketChatComponent', () => {
  let component: BucketChatComponent;
  let fixture: ComponentFixture<BucketChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
