import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  activatePanelSwitch(container: HTMLDivElement): void {
    container.classList.add("right-panel-active");
    console.log("container switched");
  }

  activatePanelUnSwitch(container: HTMLDivElement) {
    container.classList.remove("right-panel-active");
  }
}
