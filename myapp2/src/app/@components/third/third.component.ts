import { ExampleService } from './../../@services/example.service';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
})
export class ThirdComponent {
  constructor(
    private exampleService: ExampleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  account!: string; //帳號
  password!: string; //密碼
  sendData() {
    this.exampleService.globalData = {
      account: this.account,
      password: this.password,
    };
    this.router.navigate(['/second']);
  }
}
