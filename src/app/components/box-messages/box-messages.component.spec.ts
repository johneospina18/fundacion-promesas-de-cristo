import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMessagesComponent } from './box-messages.component';

describe('BoxMessagesComponent', () => {
  let component: BoxMessagesComponent;
  let fixture: ComponentFixture<BoxMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
