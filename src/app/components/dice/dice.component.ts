import { Component, Input } from '@angular/core';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Input() dice!: number;

  diceMap = [
    {
      num: 1,
      classes: 'center' 
    },
    {
      num: 2,
      classes: 'bottom-left top-right'
    },
    {
      num: 3,
      classes: 'bottom-left top-right center'
    },
    {
      num: 4,
      classes: 'bottom-left top-right bottom-right top-left'
    },
    {
      num: 5,
      classes: 'bottom-left top-right bottom-right top-left center'
    },
    {
      num: 6,
      classes: 'bottom-left top-right bottom-right top-left middle-left middle-right'
    }
  ]

  getDiceClasses() {
    const findDice = this.diceMap.find(d => d.num === this.dice);

    return findDice?.classes.split(' ');
  }
}
