import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dice-roll-form',
  templateUrl: './dice-roll-form.component.html',
  styleUrls: ['./dice-roll-form.component.scss']
})
export class DiceRollFormComponent implements OnInit {

  form!: FormGroup;

  @Output() onRollDice = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      numberOfDice: [0, [
        Validators.required,
        Validators.max(99),
        Validators.min(1)
      ]]
    })
  }

  rollDice() {
    if (this.form.valid) {
      this.onRollDice.emit(this.form.get('numberOfDice')?.value);
    }
  }

}
