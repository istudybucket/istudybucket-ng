import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { NavLandingComponent } from './nav-landing/nav-landing.component';
import { HeroLandingComponent } from './hero-landing/hero-landing.component';



@NgModule({
  declarations: [
    MainLandingComponent,
    NavLandingComponent,
    HeroLandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLandingComponent,
    NavLandingComponent,
    HeroLandingComponent
  ]
})
export class LandingModule { }
