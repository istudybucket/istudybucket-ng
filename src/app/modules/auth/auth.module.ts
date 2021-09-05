import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterTitleComponent } from './register-title/register-title.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {DividerModule} from "primeng/divider";
import {SplitterModule} from "primeng/splitter";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    RegisterTitleComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    DividerModule,
    SplitterModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RegisterTitleComponent,
    RegisterFormComponent,
    AuthComponent
  ]
})
export class AuthModule { }
