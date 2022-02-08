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
      name: "Compañerismo",
      img: "/assets/images/softskills/compa.png",
    },
    {
      name: "Liderazgo",
      img: "/assets/images/softskills/liderazgo.png",
    },
    {
      name: "Solución",
      img: "/assets/images/softskills/solucion.png",
    },
    {
      name: "Creatividad",
      img: "/assets/images/softskills/creatividad.png",
    },
    {
      name: "Análisis",
      img: "/assets/images/softskills/analisis.png",
    },
  ];

}
