import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "../auth/auth.module";
import { MainNavComponent } from './main-nav/main-nav.component';
import {SharedModule} from "../shared.module";
import { NavHeaderComponent } from './nav-header/nav-header.component';



@NgModule({
    declarations: [
      MainNavComponent, NavHeaderComponent
    ],
    exports: [
      MainNavComponent,
      NavHeaderComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule
  ]
})
export class NavModule { }
