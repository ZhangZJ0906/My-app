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
  res!:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let jsonData={
      "name":"rte",
      "lev":"87",
      "test":"我去"
    }
    this.res=jsonData
    console.log(this.res.name);
    

    }
}
