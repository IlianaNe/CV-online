import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculum';
  loading = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        setTimeout( () => {
          console.log("hola persona curiosa");
          this.loading = true;
        }, 4500);
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    })
  }

  animationLogo: AnimationOptions = {
    path: '/assets/animations/logo/web.json',
    loop: false,
    autoplay: true, 
  };

  animationCreated(animationItem: AnimationItem): void {
  }
}
