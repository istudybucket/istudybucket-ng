import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {MenuItem} from "../../../models/interfaces/menu-item";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  user: User;
  profileActions: MenuItem[];

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

    this.profileActions = [
      {label: 'Edit Profile', icon: 'manage_accounts', routerLink: '', badgeValue: 0},
      {label: 'Add Link', icon: 'person_add', routerLink: '', badgeValue: 0},
      {label: 'Logout', icon: 'logout', routerLink: '', badgeValue: 0},
    ];

  }

  ngOnInit(): void {
  }
}
