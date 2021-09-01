import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Feature Modules
import { AuthModule } from "./modules/auth/auth.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
