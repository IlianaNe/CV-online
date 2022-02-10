import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animation2: AnimationOptions = {
    path: '/assets/animations/header/header2.json',
    loop: false,
    autoplay: true,
  };

  animation: AnimationOptions = {
    path: '/assets/animations/header/header.json',
    loop: false,
    autoplay: true,
  };


  animationCreated(animationItem: AnimationItem): void {
  }

}
 