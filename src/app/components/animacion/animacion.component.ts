import { AfterViewInit, Component, OnInit } from '@angular/core';
import { create } from '@lottiefiles/lottie-interactivity';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css']
})
export class AnimacionComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const player = document.getElementById('animatronico');
    player!.addEventListener('load', () => {
      create({
        mode: "scroll",
        player: "#animatronico",
        actions: [
          {
          visibility: [0.50, 1.0],
          type: "play"
        }]
      })
    })
  }

  ngOnInit(): void {

  }

}
