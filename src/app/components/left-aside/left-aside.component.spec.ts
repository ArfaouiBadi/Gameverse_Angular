import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAsideComponent } from './left-aside.component';

describe('LeftAsideComponent', () => {
  let component: LeftAsideComponent;
  let fixture: ComponentFixture<LeftAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftAsideComponent]
    });
    fixture = TestBed.createComponent(LeftAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
