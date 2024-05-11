import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerCreateFormComponent } from './volunteer-create-form.component';

describe('VolunteerCreateFormComponent', () => {
  let component: VolunteerCreateFormComponent;
  let fixture: ComponentFixture<VolunteerCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerCreateFormComponent]
    });
    fixture = TestBed.createComponent(VolunteerCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
