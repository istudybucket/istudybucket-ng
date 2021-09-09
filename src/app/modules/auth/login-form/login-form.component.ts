import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hidePassword: boolean;
  @Input("reg-form") regForm: HTMLDivElement | undefined;
  @Input("log-form") logForm: HTMLDivElement | undefined;

  constructor() {
    this.hidePassword = true;
  }

  ngOnInit(): void {
  }

  invertHide() {
    this.hidePassword = !this.hidePassword;
  }

  switchToRegister() {
    this.regForm?.classList.remove("d-none");
    this.logForm?.classList.add("d-none");
  }
}
