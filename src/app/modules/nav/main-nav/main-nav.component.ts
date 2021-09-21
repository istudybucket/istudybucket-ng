import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../../../models/interfaces/menu-item";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  menuItems: MenuItem[];
  title: string;

  constructor() {
    this.title = "iSB";

    this.menuItems = [
      {label: 'Home', icon: 'home', badgeValue: 0, routerLink: '/home'},
      {label: 'Friends', icon: 'people', badgeValue: 3, routerLink: '/chat'},
      {label: 'Chat', icon: 'chat', badgeValue: 5, routerLink: '/home'},
      {label: 'Notifications', icon: 'notifications', badgeValue: 34, routerLink: '/chat'},
      {label: 'Buckets', icon: 'groups', badgeValue: 9, routerLink: '/auth'},
    ];
  }

  ngOnInit(): void {
  }


  isBadgeHidden(badgeValue: number) : boolean{
    return badgeValue <= 0;
  }
}
