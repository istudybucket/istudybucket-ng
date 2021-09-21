import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'istudybucket-ngk';

  constructor() {
    //this.activateNavEffect();
  }

  activateNavEffect() {
    window.onscroll = function () {
      stickNavigation();
    };

    let isbNavbar = document.getElementById("isb-navbar");
    let sticky = 0;

    if(isbNavbar != null) {
      sticky = isbNavbar.offsetTop;
    }
    const stickNavigation = () => {
      if(window.pageYOffset >= sticky && isbNavbar != null) {
        isbNavbar.classList.add("sticky");
      }
    }
  }
}
