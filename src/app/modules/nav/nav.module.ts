import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "../auth/auth.module";
import { MainNavComponent } from './main-nav/main-nav.component';
import {SharedModule} from "../shared.module";



@NgModule({
    declarations: [MainNavComponent],
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
