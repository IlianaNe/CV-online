import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animationDB: AnimationOptions = {
    path: '/assets/animations/database.json',
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
