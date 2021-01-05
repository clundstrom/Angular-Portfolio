import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private christmasTheme = new Subject<boolean>();
  isChristmasTheme: Observable<boolean> = this.christmasTheme.asObservable();

  constructor(){
  }

  /*
  Sends the value new value to all observers.
   */
  setChristmasTheme(isChristmasTheme: boolean): void {
    this.christmasTheme.next(isChristmasTheme);
  }
}
