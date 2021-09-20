import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormTitleComponent } from './form-title/form-title.component';
import { AuthComponent } from './auth/auth.component';
import { FormBoxComponent } from './form-box/form-box.component';
import {SharedModule} from "../shared.module";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    FormTitleComponent,
    AuthComponent,
    FormBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
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
