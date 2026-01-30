import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  level: number = 1;
  attack: number = 10;
  defeat: number = 10;
  editlevel!: any;

  lossLevel() {
    if (this.level < 2) {
      this.level = 1;
      alert("我去不能小於1")
    }
    this.level -= 1;
    this.attack -= 3;
    this.defeat -= 2;
  }
  upLevel() {
    this.level += 1;
    this.attack += 3;
    this.defeat += 2;
  }
  edit(newLevel: number) {
    this.editlevel='';
    let levels = newLevel - this.level;
    this.level = newLevel;
    this.attack += levels * 3;
    this.defeat += levels * 2;
  }
  reset() {
    this.attack = 10;
    this.defeat = 10;
    this.level = 1;
  }
}
