import { Component, AfterViewInit } from '@angular/core';
import { 
    Router, NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {

  title = 'curriculum';
  loading;
  constructor(
    private router: Router
  ) {
    this.loading = true;
  }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
          console.log(this.loading);
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
          console.log(this.loading);
        }
      });
  }
}
