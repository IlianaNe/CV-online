import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css']
})
export class AnimacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animationPresentation: AnimationOptions = {
    path: '/assets/animations/yo/yoCara.json',
    loop: false,
    autoplay: true, 
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
