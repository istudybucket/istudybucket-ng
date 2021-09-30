import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../../../models/interfaces/menu-item";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() {
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
