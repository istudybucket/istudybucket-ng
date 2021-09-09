import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {AuthModule} from "../auth/auth.module";
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { NavAreaComponent } from './nav-area/nav-area.component';



@NgModule({
    declarations: [MainNavComponent, NavLogoComponent, NavAreaComponent],
    exports: [
        MainNavComponent
    ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AuthModule
  ]
})
export class NavModule { }
