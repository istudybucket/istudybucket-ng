import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hidePassword: boolean;

  constructor() {
    this.hidePassword = true;
  }

  ngOnInit(): void {
  }

  invertHide() {
    this.hidePassword = !this.hidePassword;
  }
}
