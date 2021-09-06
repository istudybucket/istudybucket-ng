import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginFormComponent} from "./modules/auth/login-form/login-form.component";
import {RegisterFormComponent} from "./modules/auth/register-form/register-form.component";

const routes: Routes = [
  {path : 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {

}
