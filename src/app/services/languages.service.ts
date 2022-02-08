import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private languages: Language[] = [
    {
      name: "English",
      img: "/assets/images/languages/english.png",
      level: "Level B1"
    },
    {
      name: "Italian",
      img: "/assets/images/languages/italian.png",
      level: "Level B2"
    },
    {
      name: "Chinese",
      img: "/assets/images/languages/chinese.png",
      level: "Level HSK1"
    },
  ];

  constructor() { }

  getIdiomas(): Language[] {
    return this.languages;
  }
}

export interface Language {
  name: string;
  img: string;
  level: string;
}

