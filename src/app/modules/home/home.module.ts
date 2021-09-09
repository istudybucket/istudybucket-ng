import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { HomeFeedComponent } from './home-feed/home-feed.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HomeSidemenuComponent } from './home-sidemenu/home-sidemenu.component';
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
    declarations: [
        HomeSidebarComponent,
        HomeFeedComponent,
        HomeComponent,
        HomeSidemenuComponent
    ],
    exports: [
      HomeComponent,
      HomeFeedComponent,
      HomeSidebarComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class HomeModule { }
