import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared.module";
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { HomeFeedComponent } from './home-feed/home-feed.component';
import { HomeComponent } from './home/home.component';
import { HomeSidemenuComponent } from './home-sidemenu/home-sidemenu.component';
import {AppGlobalModule} from "../app-global/app-global.module";

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
        SharedModule,
        AppGlobalModule
    ]
})
export class HomeModule { }
