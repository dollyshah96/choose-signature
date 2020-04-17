import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as textToImage from 'text-to-image';
@Component({
  selector: 'app-choose-signature',
  templateUrl: './choose-signature.component.html',
  styleUrls: ['./choose-signature.component.scss']
})
export class ChooseSignatureComponent implements OnInit {
  name: string;
  initial: string;
  currentFontFamily: string;
  fontFamily = [{ name: 'Tangerine', url: 'https://fonts.googleapis.com/css?family=Tangerine' }, { name: 'Dancing Script, cursive', url: 'https://fonts.googleapis.com/css2?family=Dancing+Script' }];

  nameImg: string;
  initialImg: string;
  constructor() { }

  ngOnInit(): void {
    this.fontFamily.map(e => {
      let link = document.createElement('link');
      link.setAttribute("href", e.url)
      link.setAttribute('rel', 'stylesheet');
      document.body.appendChild(link);
    });
  }

  onCreate() {
    const options = {
      maxWidth: 1000,
      fontSize: 48,
      fontFamily: this.currentFontFamily,
      lineHeight: 50,
      margin: 5,
      textColor: "Black"
    }
    textToImage.generate(this.name, options).then((dataUri) => {
      this.nameImg = dataUri;
    });

    textToImage.generate(this.initial, options).then((dataUri) => {
      this.initialImg = dataUri;
    });
  }
}
