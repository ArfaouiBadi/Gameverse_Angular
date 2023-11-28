import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGameComponent } from './modifier-game.component';

describe('ModifierGameComponent', () => {
  let component: ModifierGameComponent;
  let fixture: ComponentFixture<ModifierGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierGameComponent]
    });
    fixture = TestBed.createComponent(ModifierGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
