import { AfterViewInit, Component, OnInit } from '@angular/core';
import { create } from '@lottiefiles/lottie-interactivity';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor() { }

  ngAfterViewInit(): void {
    const player = document.getElementById('DataB');
    player!.addEventListener('load', () => {
      create({
        mode: "cursor",
        player: "#DataB",
        actions: [{
          type: "hover",
          forceFlag: false
        }]
      })
    })
  }

  ngOnInit(): void {

  }

}
