import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "../auth/auth.module";
import { MainNavComponent } from './main-nav/main-nav.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { NavAreaComponent } from './nav-area/nav-area.component';
import {SharedModule} from "../shared.module";



@NgModule({
    declarations: [MainNavComponent, NavLogoComponent, NavAreaComponent],
    exports: [
        MainNavComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule
  ]
})
export class NavModule { }
