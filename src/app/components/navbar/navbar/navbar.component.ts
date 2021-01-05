import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ThemeService} from '../../../services/theme.service';
import {CookieService} from 'ngx-cookie-service';
import {ApistatusService} from '../../../services/apistatus.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private theme: ThemeService, private cookie: CookieService, private api: ApistatusService) {
  }
  isShown: boolean = false;
  loggedIn;
  isChristmas: boolean;
  apiOnline: boolean;

  // Subscribe to Auth
  ngOnInit() {
    //this.isChristmas = this.cookie.get('ThemeChristmas') === 'true';
    this.auth.getAuthState().subscribe((auth) => {
      this.loggedIn = auth;
    });
    this.api.getStatus().subscribe((data) => {
      if (data) {
        let last_online = data['last_online'] as Timestamp
        this.apiOnline = (Timestamp.now().seconds - last_online.seconds) <= 60 *45
      }
    });
    //this.theme.setChristmasTheme(this.isChristmas);
  }

  // Invert value - Set Cookie and Set theme

  toggleSnow() {
    this.isChristmas = !this.isChristmas;
    this.cookie.set('ThemeChristmas', String(this.isChristmas));
    this.theme.setChristmasTheme(this.isChristmas);
  }

  async signout() {
    await this.auth.signout();
    this.loggedIn = false;
  }

  scrollTop() {
    window.scroll(0, 0);
  }
}
