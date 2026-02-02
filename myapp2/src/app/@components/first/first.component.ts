import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-first',
  imports: [ RouterOutlet],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  constructor(private router: Router) {}

}
