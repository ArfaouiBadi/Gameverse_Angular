import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPlayedGamesComponent } from './most-played-games.component';

describe('MostPlayedGamesComponent', () => {
  let component: MostPlayedGamesComponent;
  let fixture: ComponentFixture<MostPlayedGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPlayedGamesComponent]
    });
    fixture = TestBed.createComponent(MostPlayedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
