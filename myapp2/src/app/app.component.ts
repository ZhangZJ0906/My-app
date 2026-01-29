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
  ngOnInit(): void {
    //4
    // let data = [
    //   {
    //     name: '小王',
    //     age: 10,
    //   },
    //   {
    //     name: '大名',
    //     age: 87,
    //   },
    //   {
    //     name: '大王',
    //     age: 52,
    //   },
    // ];

    // data.forEach((item,index,array) => {
    //   if(data[index].name=='小王'){
    //     data[index].age = 18;
    //   }
    //     console.log(data[)

    // });
    //5
    let data = [4, 6, 1, 2, 7, 9, 12, 15, 13];
    let newarr = data[0];
    for (let i = 0; i < data.length; i++) {
      if (data[i] < newarr) {
        newarr = data[i];
      }
    }
    console.log(newarr);

    //6
    // let st = '你好我是ALLEN';

    // for(let i =st.length ; i>0 ; i--){
    //   console.log(i)
    //   console.log(st.slice(i-1,i))
    // }
    //7
    // let st = '你好我是ALLEN';
    // let str=st.slice(2)
    // let s=st.slice(0,2)
    // console.log(str+","+s)
  }
}
