import { Component, Input, output } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  test!: {
    name: string;
    email: string;
    address: string;
  };
  name!: string;
  email!: string;
  address!: string;

  origindata = output<{
    name: string;
    email: string;
    address: string;
  }>();

  nameNotify = output<string>();
  emailNotify = output<string>();

  addressNotify = output<string>();

  send() {
    this.origindata.emit({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    console.log(this.origindata)
  }
  sendName() {
    this.nameNotify.emit(this.name);
  }
  sendEmail() {
    this.emailNotify.emit(this.email);
  }
  sendAdd() {
    this.addressNotify.emit(this.address);
  }
}
