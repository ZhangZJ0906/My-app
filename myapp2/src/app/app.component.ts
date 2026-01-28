import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
enum apiStatus {
  Loading,
  Success,
  Reject,
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myapp2';
  arrType: string[] = ['da', '123'];
  arrType2: Array<string> = ['test'];
  tupleType: [number, string] = [123, 'ad']; // 值要對其前面型別
  anyType: any[] = [123, '222']; //啥都吃 之後也可以改變 看成let 即可
  nullType: number | null | string | undefined;
  userName: string | null = null;
  userPassword: number | null = null;

  booleanType: boolean = true; //test
  stringType: string = 'test'; //test
  numberType: number = 123; // test

  status: apiStatus = apiStatus.Reject;
}
