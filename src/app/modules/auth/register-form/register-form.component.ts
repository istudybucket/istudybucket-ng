import { Component, OnInit } from '@angular/core';
import {COUNTRY_CODES, ROLES} from "../constants";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  countryCodes: Array<number>;
  roles: Array<string>;
  constructor() {
    this.countryCodes = COUNTRY_CODES;
    this.roles = ROLES;
  }

  ngOnInit(): void {
  }

}
