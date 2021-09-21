import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IsbGuardGuard} from "../guards/isb-guard.guard";
import {AuthComponent} from "./auth/auth/auth.component";
import {ChatComponent} from "./chat/chat/chat.component";
import {HomeComponent} from "./home/home/home.component";
import {ProfileComponent} from "./profile/profile/profile.component";

const routes : Routes = [
  {
    path: '',
    canActivate:[IsbGuardGuard],
    component: HomeComponent
  },
  {path: 'auth', component: AuthComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
