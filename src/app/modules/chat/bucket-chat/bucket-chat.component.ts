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
      new Bucket("Example Bucket 1", 100),
      new Bucket("Example Bucket 2", 100),
      new Bucket("Example Bucket 3", 100),
      new Bucket("Example Bucket 4", 100),
      new Bucket("Example Bucket 5", 100),
      new Bucket("Example Bucket 1", 100),
      new Bucket("Example Bucket 2", 100),
      new Bucket("Example Bucket 3", 100),
      new Bucket("Example Bucket 4", 100),
      new Bucket("Example Bucket 5", 100),
    ];
  }

  ngOnInit(): void {
  }

}
