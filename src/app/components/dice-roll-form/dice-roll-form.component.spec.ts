import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollFormComponent } from './dice-roll-form.component';

describe('DiceRollFormComponent', () => {
  let component: DiceRollFormComponent;
  let fixture: ComponentFixture<DiceRollFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiceRollFormComponent]
    });
    fixture = TestBed.createComponent(DiceRollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
