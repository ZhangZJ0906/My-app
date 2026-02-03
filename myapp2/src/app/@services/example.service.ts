import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  globalData!:{
  account:string,
  password:string
}
  constructor() {}
}
