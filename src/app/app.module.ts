import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Feature Modules
import { AuthModule } from "./modules/auth/auth.module";
import {LandingModule} from "./modules/landing/landing.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AuthModule,
        BrowserAnimationsModule,
        LandingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
