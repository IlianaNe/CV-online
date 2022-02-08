import { Component, OnInit } from '@angular/core';
import { LanguagesService, Language } from 'src/app/services/languages.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languages: Language[] = [];

  constructor(private _idiomasService: LanguagesService) { }

  ngOnInit(): void {
    this.languages = this._idiomasService.getIdiomas();
  }
}
