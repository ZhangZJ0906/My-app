import { Person } from './../../@interfaces/person';
import { test } from './../../@interfaces/person';

import { Component } from '@angular/core';
interface Personal {
  name: string;
  age: number;
  id: number;
  note?: string;
}

@Component({
  selector: 'app-interface-demo',
  imports: [],
  templateUrl: './interface-demo.component.html',
  styleUrl: './interface-demo.component.scss',
})
export class InterfaceDemoComponent implements test {
  name: string = '';
  getName(): string {
    return this.name;
  }
  person!: test;
  ngOnInit(): void {
    let userr: test = {
      name: '77',
      getName(): string {
        return this.name;
      },
    };
    console.log(userr.getName());
    let user: Person;
    user = {
      userName: 'test',
      lev: 18,
      prop: [
        {
          propsName: 'test',
          amount: 18,
        },
        {
          propsName: 'aa',
          amount: 18,
        },
      ],
    };

    console.log(user.prop[1].propsName);
  }
}
