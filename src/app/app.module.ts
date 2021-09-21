import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthModule} from "./modules/auth/auth.module";
import {NavModule} from "./modules/nav/nav.module";
import {HomeModule} from "./modules/home/home.module";
import {ChatModule} from "./modules/chat/chat.module";
import {SharedModule} from "./modules/shared.module";
import {RouterModule} from "@angular/router";
import { MATERIAL_SANITY_CHECKS} from "@angular/material/core";
import {ProfileModule} from "./modules/profile/profile.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AuthModule,
    NavModule,
    HomeModule,
    ChatModule,
    ProfileModule,
    RouterModule
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
