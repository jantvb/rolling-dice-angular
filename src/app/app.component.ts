import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rolling-dice';
  dices: number[] = [];

  rollDice(numberOfDice: number) {

    this.dices = [];

    for (let i = 0; i < numberOfDice; i++) {
      this.dices.push(Math.floor(Math.random() * 6) + 1);
    }

  }
}
