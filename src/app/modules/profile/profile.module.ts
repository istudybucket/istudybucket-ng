import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared.module";
import { ProfileFeatureComponent } from './profile-feature/profile-feature.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@NgModule({
  declarations: [
    ProfileFeatureComponent,
    ProfileComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProfileFeatureComponent,
    ProfileComponent,
    ProfileInfoComponent
  ]
})
export class ProfileModule { }
