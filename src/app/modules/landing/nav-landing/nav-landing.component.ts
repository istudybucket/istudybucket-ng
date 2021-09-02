import { Component, OnInit } from '@angular/core';
import {APP_TITLE} from "../../../konsts";

@Component({
  selector: 'app-nav-landing',
  templateUrl: './nav-landing.component.html',
  styleUrls: ['./nav-landing.component.css']
})
export class NavLandingComponent implements OnInit {
  appTitle: string;

  constructor() {
    this.appTitle = APP_TITLE;
  }

  ngOnInit(): void {
  }

}
