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
test(ms:string){
  alert(ms+"超屌");
  this.test2();
}

test2(ms="林老師"){
alert(ms+"卡好")
}
}
