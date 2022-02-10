import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: any[] = [
    {
      name: "Friendliness",
      img: "/assets/images/softskills/compa.png",
    },
    {
      name: "Leadership",
      img: "/assets/images/softskills/liderazgo.png",
    },
    {
      name: "Initiative",
      img: "/assets/images/softskills/solucion.png",
    },
    {
      name: "Creativity",
      img: "/assets/images/softskills/creatividad.png",
    },
    {
      name: "Analytical",
      img: "/assets/images/softskills/analisis.png",
    },
  ];

}
