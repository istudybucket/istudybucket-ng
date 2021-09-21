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


    ];
  }
  ngOnInit(): void {
  }

}
