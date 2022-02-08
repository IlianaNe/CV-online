import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animationPresentation: AnimationOptions = {
    path: '/assets/animations/yo/yoWeb.json',
    loop: false,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
