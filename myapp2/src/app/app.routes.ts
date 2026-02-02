import { Routes } from '@angular/router';
import { FirstComponent } from './@components/first/first.component';
import { SecondComponent } from './@components/second/second.component';
import { AppComponent } from './app.component';
import { ThirdComponent } from './@components/third/third.component';
import { ChildComponent } from './@components/child/child.component';

export const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent,
      },
    ],
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: 'second/:id',
    component: SecondComponent,
  },
  {
    path: 'third',
    component: ThirdComponent,
  },
  {
    path: 'a',
    redirectTo: '/first',
    pathMatch: 'prefix',
  },
  {
    //for 404頁面
    path: '**',
    component: AppComponent,
  },
];
