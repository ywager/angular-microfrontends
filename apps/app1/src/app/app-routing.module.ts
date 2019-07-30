import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: 'test1',
    loadChildren: './test1/test1.module#Test1Module',
  },
  {
    path: 'test2',
    loadChildren: './test2/test2.module#Test2Module',
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
