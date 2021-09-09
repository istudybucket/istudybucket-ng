import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hidePassword: boolean;

  @Output() displayLog : EventEmitter<boolean>;

  constructor() {
    this.hidePassword = true;
    this.displayLog = new EventEmitter<boolean>(true);
  }

  ngOnInit(): void {
  }

  invertHide() {
    this.hidePassword = !this.hidePassword;
  }

  switchToRegister() {
    this.displayLog.emit(false)
  }
}
