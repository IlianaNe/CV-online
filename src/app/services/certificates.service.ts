import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  private certificates: Certificate[] = [
    {
      name: "CSS3",
      img: "/assets/images/certificados/CSS3.PNG",
      location: "Udemy"
    },
    {
      name: "HTML5",
      img: "/assets/images/certificados/HTML5.PNG",
      location: "Udemy"
    },
    {
      name: "Master JavaScript",
      img: "/assets/images/certificados/javascript.PNG",
      location: "Udemy"
    },
    {
      name: "Master Unity Videojuegos 3D",
      img: "/assets/images/certificados/masterUnity.PNG",
      location: "Udemy"
    },
    {
      name: "After Effects",
      img: "/assets/images/certificados/AE.PNG",
      location: "Domestika"
    },
    {
      name: "Unity para Videojuegos 2D",
      img: "/assets/images/certificados/unity2d.PNG",
      location: "Udemy"
    },
    {
      name: "Diseño Web Profesional",
      img: "/assets/images/certificados/diseñoWeb.PNG",
      location: "Udemy"
    },
    {
      name: "Diplomado de programación en Python",
      img: "/assets/images/certificados/python.png",
      location: "Videogames Academy"
    },
    {
      name: "Universidad Java de Cero a Experto",
      img: "/assets/images/certificados/java.png",
      location: "Udemy"
    },
    {
      name: "Angular de Cero a Experto",
      img: "/assets/images/certificados/angular.png",
      location: "Udemy"
    },
    {
      name: "Participación PRESEA Bernando Quintana Arrioja ",
      img: "/assets/images/certificados/presea.png",
      location: "IPN Cecyt 14"
    }
  ];

  constructor() { }

  getCertificates(): Certificate[] {
    return this.certificates;
  }

}


export interface Certificate {
  name: string;
  img: string;
  location: string;
}



