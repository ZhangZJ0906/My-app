import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  level: number = 1; // 等級
  attack: number = 10; // 攻擊
  defeat: number = 10; //防禦
  editlevel!: any; //抓輸入等級

  //===================降等===================
  lossLevel() {
    if (this.level <= 1) {
      this.level = 1;
      alert('我去不能小於1');
      return;
    } else {
      this.level -= 1;
      this.attack -= 3;
      this.defeat -= 2;
    }
  }
  //===========升等===================
  upLevel() {
    this.level += 1;
    this.attack += 3;
    this.defeat += 2;
  }
  //=========修改等級================
  edit(newLevel: number) {
    this.editlevel = '';
    let levels = newLevel - this.level;
    this.level = newLevel;
    this.attack += levels * 3;
    this.defeat += levels * 2;
  }
  // ====簡單重置==============
  reset() {
    this.attack = 10;
    this.defeat = 10;
    this.level = 1;
  }
}
