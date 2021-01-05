import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar/navbar.component';
import {NotsupportedComponent} from './components/body/notsupported/notsupported.component';
import {ChristmasComponent} from './components/body/themes/christmas/christmas.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {CookieService} from 'ngx-cookie-service';
import {AngularFirestore} from '@angular/fire/firestore';
import {HighlightService} from './services/highlight.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireStorageModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        NotsupportedComponent,
        ChristmasComponent

      ],
      providers : [
        AngularFirestore,
        HighlightService,
        CookieService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'clundstrom'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('clundstrom');
  });
});
