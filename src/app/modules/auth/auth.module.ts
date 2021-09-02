import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterTitleComponent } from './register-title/register-title.component';
import { LoginTitleComponent } from './login-title/login-title.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    RegisterTitleComponent,
    LoginTitleComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RegisterTitleComponent,
    RegisterFormComponent
  ]
})
export class AuthModule { }
