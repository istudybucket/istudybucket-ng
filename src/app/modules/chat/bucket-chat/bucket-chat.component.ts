import { Component, OnInit } from '@angular/core';
import {Bucket} from "../../../models/bucket.model";

@Component({
  selector: 'app-bucket-chat',
  templateUrl: './bucket-chat.component.html',
  styleUrls: ['./bucket-chat.component.css']
})
export class BucketChatComponent implements OnInit {

  buckets: Bucket[];

  constructor() {
    this.buckets = [
      new Bucket(
        "Example",
        "Description",
        "Elroy Kanye",
        3,
        "group-image",
        "21-02-2021",
        ),
    ];
  }

  ngOnInit(): void {
  }

}
