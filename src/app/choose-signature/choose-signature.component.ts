import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('sigPad') sigPad: ElementRef;

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
    // const options = {
    //   maxWidth: 1000,
    //   fontSize: 48,
    //   fontFamily: this.currentFontFamily,
    //   lineHeight: 50,
    //   margin: 5,
    //   textColor: "Black"
    // }
    // textToImage.generate(this.name, options).then((dataUri) => {
    //   this.nameImg = dataUri;
    // });

    // textToImage.generate(this.initial, options).then((dataUri) => {
    //   this.initialImg = dataUri;
    // });

    const sigPadElement = this.sigPad.nativeElement;
    const signContext = sigPadElement.getContext('2d');
    signContext.font = `normal 48px ${this.currentFontFamily}`;
    signContext.canvas.width = signContext.measureText(this.name).width + 30;
    signContext.canvas.lineHeight = signContext.measureText(this.name).lineHeight;

    signContext.font = `normal 48px ${this.currentFontFamily}`;
    signContext.fillStyle = 'black';
    signContext.fillText(this.name, 10, 100);
    this.nameImg = signContext.canvas.toDataURL()
  }
}
