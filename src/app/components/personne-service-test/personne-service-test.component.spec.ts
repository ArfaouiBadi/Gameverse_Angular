import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneServiceTestComponent } from './personne-service-test.component';

describe('PersonneServiceTestComponent', () => {
  let component: PersonneServiceTestComponent;
  let fixture: ComponentFixture<PersonneServiceTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneServiceTestComponent]
    });
    fixture = TestBed.createComponent(PersonneServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
