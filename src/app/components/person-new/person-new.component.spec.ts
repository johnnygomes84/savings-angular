import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonNewComponent } from './person-new.component';

describe('PersonNewComponent', () => {
  let component: PersonNewComponent;
  let fixture: ComponentFixture<PersonNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonNewComponent]
    });
    fixture = TestBed.createComponent(PersonNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
