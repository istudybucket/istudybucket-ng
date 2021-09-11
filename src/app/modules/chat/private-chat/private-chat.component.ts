import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {

  friends: User[];

  constructor() {
    this.friends = [
      new User ("kanye", "elroykanye@gmail.com"),
      new User ("vince", "elroykanye@gmail.com"),
      new User ("karnage", "elroykanye@gmail.com"),
      new User ("elroy", "elroykanye@gmail.com"),
      new User ("elroyv", "elroykanye@gmail.com"),
      new User ("elroyk", "elroykanye@gmail.com"),
      new User ("elroyvk", "elroykanye@gmail.com"),
      new User ("elroykarnage", "elroykanye@gmail.com"),
      new User ("elroykanye", "elroykanye@gmail.com"),

    ];
  }
  ngOnInit(): void {
  }

}
