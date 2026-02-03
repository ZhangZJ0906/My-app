import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-father',
  imports: [ChildComponent, FormsModule],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss',
})
export class FatherComponent {
  getData= {
    name: '',
    email: '',
    address: '',
  };
  name!: string;
  email!: string;
  address!: string;

  showData(data: { name: string; email: string; address: string }) {
    console.log(data)
    this.getData.name=data.name;
    this.getData.email=data.email;
    this.getData.address=data.address;
  }
  showName(msg: string) {
    this.name = msg;
    console.log(this.name);
  }
  showEmail(msg: string) {
    this.email = msg;
    console.log(this.email);
  }
  showAdd(msg: string) {
    this.address = msg;
    console.log(this.address);
  }
}
