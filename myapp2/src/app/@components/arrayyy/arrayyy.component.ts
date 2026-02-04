import { Component } from '@angular/core';

@Component({
  selector: 'app-arrayyy',
  imports: [],
  templateUrl: './arrayyy.component.html',
  styleUrl: './arrayyy.component.scss',
})
export class ArrayyyComponent {
  userArr = [
    {
      userName: 'A',
      lev: 10,
      props: [
        {
          propsName: '蘑菇',
          amount: 5,
        },
        {
          propsName: '金幣',
          amount: 25,
        },
      ],
    },
    {
      userName: 'B',
      lev: 16,
      props: [
        {
          propsName: '龜殼',
          amount: 1,
        },
        {
          propsName: '砲彈',
          amount: 3,
        },
      ],
    },
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
