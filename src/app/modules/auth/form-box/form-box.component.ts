import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.css']
})
export class FormBoxComponent implements OnInit {

  showLogin: boolean;

  constructor() {
    this.showLogin = true;

  }

  ngOnInit(): void {
  }

  displayForm($event: boolean) {
    this.showLogin = $event;
  }

}
