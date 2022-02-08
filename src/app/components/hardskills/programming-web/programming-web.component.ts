import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-web',
  templateUrl: './programming-web.component.html',
  styleUrls: ['./programming-web.component.css']
})
export class ProgrammingWebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name: string = "Web Development";

  public images: any[] = [
    {
      img: "/assets/images/programming/html.png",
    },
    {
      img: "/assets/images/programming/sass.png",
    },
    {
      img: "/assets/images/programming/css.png",
    },
    {
      img: "/assets/images/programming/word.png",
    },
    {
      img: "/assets/images/programming/boot.png",
    },
  ];

}
