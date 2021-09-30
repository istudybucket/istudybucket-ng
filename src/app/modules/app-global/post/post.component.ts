import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  constructor() {
    this.posts = [
      new Post(
        "My Post",
        "Elroy Kanye",
        "This is my sample post conetne for the isb platform",
        3, 5, 23
      ),
      new Post(
        "Hell spawning",
        "Kay Vince",
        "This is my sample post conetne for the isb platform",
        3, 5, 23
      ),
      new Post(
        "Who met me",
        "J Karnage",
        "This is my sample post conetne for the isb platform",
        3, 5, 23
      ),
      new Post(
        "Hello World",
        "Amanda",
        "This is my sample post conetne for the isb platform",
        3, 5, 23
      ),
      new Post(
        "Get cooked",
        "Kimbi",
        "This is my sample post conetne for the isb platform",
        3, 5, 23
      ),
    ]
  }

  ngOnInit(): void {
  }

}
