import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar/navbar.component';
import {BioComponent} from './components/body/bio/bio.component';
import {ConstructionComponent} from './components/body/construction/construction.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {LoginComponent} from './components/navbar/login/login.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HighlightService} from './services/highlight.service';
import {MainComponent} from './components/body/main/main.component';
import {FeedPreviewComponent} from './components/body/feed-preview/feed-preview.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {CoursesComponent} from './components/body/courses/courses.component';
import {CookieService} from 'ngx-cookie-service';
import {SharedModule} from './modules/shared/shared.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material';
import { NotsupportedComponent } from './components/body/notsupported/notsupported.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NotfoundComponent } from './components/body/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BioComponent,
    ConstructionComponent,
    LoginComponent,
    MainComponent,
    FeedPreviewComponent,
    CoursesComponent,
    NotsupportedComponent,
    NotfoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LMarkdownEditorModule,
    HttpClientModule,
    SharedModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  providers: [
    AngularFirestore,
    HighlightService,
    CookieService],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
