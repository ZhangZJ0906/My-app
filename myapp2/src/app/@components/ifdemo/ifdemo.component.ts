import { Component } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  imports: [],
  templateUrl: './ifdemo.component.html',
  styleUrl: './ifdemo.component.scss',
})
export class IfdemoComponent {
  num: number = 1;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.num == 1) {
      console.log(1);
    } else if (this.num == 2) {
      console.log(2);
    } else {
      console.log('other');
    }

    switch (this.num) {
      case 1:
        console.log('switch 1');
        break;
      case 2:
        console.log('switch 12');
        break;
      default:
        console.log('switch other');
        break;
    }
  }
}
