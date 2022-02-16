import { AfterViewInit, Component, OnInit } from '@angular/core';
import { create } from '@lottiefiles/lottie-interactivity';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const player = document.getElementById('RS');
    player!.addEventListener('load', () => {
      create({
        mode: "cursor",
        player: "#RS",
        actions: [
          {
            position: { x: [0, 1], y: [0, 1] },
            type: 'seek',
            frames: [0, 100],
          },
        ],
      })
    })
  }

  ngOnInit(): void {

  }
}
