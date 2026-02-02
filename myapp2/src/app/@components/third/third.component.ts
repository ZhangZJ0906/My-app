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

@Component({
  selector: 'app-third',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
})
export class ThirdComponent {
  constructor(
    private exampleService: ExampleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  firstData: string= 'test';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.activatedRoute.snapshot.queryParamMap.get('id'));
  }

  gotoindex() {
    this.router.navigate(['/']);
  }
  gotofirst() {
    this.router.navigate(['/first']);
  }
  gotosecond() {
    this.exampleService.name = this.firstData;
    this.router.navigate(['/second']);
  }
}
