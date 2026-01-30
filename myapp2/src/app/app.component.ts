import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './@components/first/first.component';
import { SecondComponent } from './@components/second/second.component';
enum apiStatus {
  Loading,
  Success,
  Reject,
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponent,SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  ngOnInit(): void {

  }
}
