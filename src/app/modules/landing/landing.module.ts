import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { NavLandingComponent } from './nav-landing/nav-landing.component';
import { HeroLandingComponent } from './hero-landing/hero-landing.component';
import { FakeLandingComponent } from './fake-landing/fake-landing.component';



@NgModule({
  declarations: [
    MainLandingComponent,
    NavLandingComponent,
    HeroLandingComponent,
    FakeLandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLandingComponent,
    NavLandingComponent,
    HeroLandingComponent,
    FakeLandingComponent
  ]
})
export class LandingModule { }
