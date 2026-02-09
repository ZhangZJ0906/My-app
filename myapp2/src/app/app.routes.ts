import { Routes } from '@angular/router';
import { FirstComponent } from './@components/first/first.component';
import { SecondComponent } from './@components/second/second.component';
import { AppComponent } from './app.component';
import { ThirdComponent } from './@components/third/third.component';
import { ChildComponent } from './@components/child/child.component';
import { FatherComponent } from './@components/father/father.component';
import { ArrayyyComponent } from './@components/arrayyy/arrayyy.component';
import { IfdemoComponent } from './@components/ifdemo/ifdemo.component';
import { ApidemoComponent } from './@components/apidemo/apidemo.component';
import { InterfaceDemoComponent } from './@components/interface-demo/interface-demo.component';

export const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'father',
    component: FatherComponent,
  },
  {
    path: 'interface',
    component: InterfaceDemoComponent,
  },
  {
    path: 'apidemo',
    component: ApidemoComponent,
  },
  {
    path: 'if',
    component: IfdemoComponent,
  },
  {
    path: 'array',
    component: ArrayyyComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
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
