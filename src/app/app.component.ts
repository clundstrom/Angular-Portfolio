import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './_layout.html',
  styleUrls: ['./_layout.scss']
})
export class AppComponent {
  isIEOrEdge = /msie\//i.test(window.navigator.userAgent)
  title = 'lundstrom.io';


  isIE() {
    let ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    let msie = ua.indexOf('MSIE '); // IE 10 or older
    let trident = ua.indexOf('Trident/'); //IE 11

    return (msie > 0 || trident > 0);
  }
}

