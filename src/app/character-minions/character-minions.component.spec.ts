import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMinionsComponent } from './character-minions.component';

describe('CharacterMinionsComponent', () => {
  let component: CharacterMinionsComponent;
  let fixture: ComponentFixture<CharacterMinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterMinionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
