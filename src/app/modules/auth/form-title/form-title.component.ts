import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.css']
})
export class FormTitleComponent implements OnInit {
  @Input("title-heading") heading: string;
  @Input("title-body") body: string;

  constructor() {
    this.heading = "default heading";
    this.body = "This is the default body for the form title component";
  }

  ngOnInit(): void {
  }

}
