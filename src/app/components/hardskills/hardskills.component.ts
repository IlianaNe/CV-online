import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name: string = "Programming languages";

  public images: any[] = [
    {
      img: "/assets/images/programming/javascript.png",
    },
    {
      img: "/assets/images/programming/cobol.png",
    },
    {
      img: "/assets/images/programming/java.png",
    },
    {
      img: "/assets/images/programming/type.png",
    },
    {
      img: "/assets/images/programming/C++.png",
    },
    {
      img: "/assets/images/programming/python.png",
    },
    {
      img: "/assets/images/programming/csharp.png",
    },
  ];

}
