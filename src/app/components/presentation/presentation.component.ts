import { AfterViewInit, Component, OnInit } from '@angular/core';
import { create } from '@lottiefiles/lottie-interactivity';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const player = document.getElementById('animatronicoPresentacion');
    player!.addEventListener('load', () => {
      create({
        mode: "scroll",
        player: "#animatronicoPresentacion",
        actions: [
          {
          visibility: [0.30, 1.0],
          type: "play"
        }],
      })
    })
  }

  ngOnInit(): void {

  }

}
