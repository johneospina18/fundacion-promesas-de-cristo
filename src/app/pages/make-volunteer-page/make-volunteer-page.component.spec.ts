import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeVolunteerPageComponent } from './make-volunteer-page.component';

describe('MakeVolunteerPageComponent', () => {
  let component: MakeVolunteerPageComponent;
  let fixture: ComponentFixture<MakeVolunteerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeVolunteerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeVolunteerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
