import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output()
  displayLog: EventEmitter<boolean>;

  constructor() {
    this.displayLog = new EventEmitter<boolean>(true)
  }

  ngOnInit(): void {
  }

  switchToLogin() : void {
    this.displayLog.emit(true);
  }

}
