import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterationTitleComponent } from './registeration-title/registeration-title.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterTitleComponent } from './register-title/register-title.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterationTitleComponent,
    RegisterationFormComponent,
    RegisterFormComponent,
    RegisterTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
