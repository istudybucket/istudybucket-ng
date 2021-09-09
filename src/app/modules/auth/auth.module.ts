import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { FormTitleComponent } from './form-title/form-title.component';
import { AuthComponent } from './auth/auth.component';
import { FormBoxComponent } from './form-box/form-box.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    FormTitleComponent,
    AuthComponent,
    FormBoxComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        FormTitleComponent,
        AuthComponent,
        FormBoxComponent
    ]
})
export class AuthModule { }
