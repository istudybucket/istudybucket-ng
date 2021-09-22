import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {MenuItem} from "../../../models/interfaces/menu-item";

@Component({
  selector: 'app-profile-feature',
  templateUrl: './profile-feature.component.html',
  styleUrls: ['./profile-feature.component.css']
})
export class ProfileFeatureComponent implements OnInit {

  user: User;
  menuItems: MenuItem[];
  constructor() {
    this.user = new User(
      "elroykanye",
      "elroykanye@gmail.com",
      "672270627",
      "Elroy",
      "Kanye",
      "21-04-2001",
      "Male",
      3
    );
    this.menuItems = [
      {label: 'Posts', icon: '', badgeValue: 0, routerLink: ''},
      {label: 'About',  icon: '', badgeValue: 0, routerLink: ''},
      {label: 'Friends',  icon: '', badgeValue: 0, routerLink: ''},
      {label: 'Buckets',  icon: '', badgeValue: 0, routerLink: ''},
      {label: 'Badges',  icon: '', badgeValue: 0, routerLink: ''},
    ]
  }


  ngOnInit(): void {
  }

}
