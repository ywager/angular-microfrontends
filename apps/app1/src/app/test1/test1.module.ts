import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1.component';

@NgModule({
  declarations: [Test1Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Test1RoutingModule,
    NgZorroAntdModule,
  ]
})
export class Test1Module { }
