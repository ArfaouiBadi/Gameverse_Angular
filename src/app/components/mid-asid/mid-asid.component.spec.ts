import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidAsidComponent } from './mid-asid.component';

describe('MidAsidComponent', () => {
  let component: MidAsidComponent;
  let fixture: ComponentFixture<MidAsidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidAsidComponent]
    });
    fixture = TestBed.createComponent(MidAsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
