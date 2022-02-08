import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animationPresentation: AnimationOptions = {
    path: '/assets/animations/yo/yoWebRS.json',
    loop: false,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
