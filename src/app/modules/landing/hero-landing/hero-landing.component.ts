import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-landing',
  templateUrl: './hero-landing.component.html',
  styleUrls: ['./hero-landing.component.css']
})
export class HeroLandingComponent implements OnInit {
  heroHeading: string;
  constructor() {
    this.heroHeading = "A better way to study"
  }

  ngOnInit(): void {
  }

}
