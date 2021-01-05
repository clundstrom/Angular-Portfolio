import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../../../services/theme.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-christmas',
  templateUrl: './christmas.component.html',
  styleUrls: ['./christmas.component.scss']
})
export class ChristmasComponent implements OnInit {

  constructor(private theme: ThemeService, private ngx: CookieService) {
  }

  audio;

  ngOnInit() {
    this.audio = new Audio('https://firebasestorage.googleapis.com/v0/b/portfolio-416e3.appspot.com/o/We_Wish_You_a_Merry_Christmas_Instrumental_Jazz.mp3?alt=media&token=fef8e57e-cf64-4b77-8be1-69423ea6bada');
    this.audio.volume = 0.05;

    this.theme.isChristmasTheme.subscribe((result) => {
      this.toggleTheme(result.valueOf());
    });

    this.toggleTheme((this.ngx.get('ThemeChristmas') === 'true'));

  }

  toggleTheme(isChristmas: boolean) {
    let snowList = document.getElementsByClassName('snow');
    if (!isChristmas) {
      this.audio.pause();
      for (let i = 0; i < snowList.length; i++) {
        let snow = <HTMLElement> snowList.item(i);
        snow.style.display = 'none';
      }
    } else {
      this.audio.play().then(() => {});
      for (let i = 0; i < snowList.length; i++) {
        let snow = <HTMLElement> snowList.item(i);
        snow.style.display = 'initial';
      }
    }
  }
}
