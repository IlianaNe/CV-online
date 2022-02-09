import { Component, ViewEncapsulation } from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from "@angular/router";
import { IsLoadingService } from "@service-work/is-loading";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  title = 'curriculum';
  isLoading: Observable<boolean> | undefined;

  constructor(
    private isLoadingService: IsLoadingService,
    private router: Router
  ) {}

  ngOnInit() {
    // Note, because `IsLoadingService#isLoading$()` returns
    // a new observable each time it is called, it shouldn't
    // be called directly inside a component template.
    this.isLoading = this.isLoadingService.isLoading$();

    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe((event) => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart) {
          this.isLoadingService.add();
          return;
        }

        // Else navigation has ended, so `remove()` a loading indicator
        this.isLoadingService.remove();
      });
  }
}
