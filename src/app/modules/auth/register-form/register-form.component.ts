import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input("reg-form") regForm: HTMLDivElement | undefined;
  @Input("log-form") logForm: HTMLDivElement | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  switchToLogin() : void {
    this.regForm?.classList.add("d-none");
    this.logForm?.classList.remove("d-none");
  }

}
