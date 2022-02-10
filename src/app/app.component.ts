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
          console.log("hola");
          this.loading = true;
        }, 4000);
        console.log(this.loading)
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
        console.log(this.loading)
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
