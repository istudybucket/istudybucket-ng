import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {DividerModule} from "primeng/divider";
import {SplitterModule} from "primeng/splitter";
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    RegisterFormComponent,
    AuthComponent,
    LoginFormComponent
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
    RegisterFormComponent,
    AuthComponent
  ]
})
export class AuthModule { }
