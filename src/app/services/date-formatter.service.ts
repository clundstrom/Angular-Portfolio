import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;


@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  MONTHS = ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'];

  constructor() { }

  /**
   * Returns a formatted string of Date.
   * @param date
   */
  dateToString(date: Date): string {
    return this.MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  timeStampToDateString(ts: Timestamp){
    try {
      let timestamp = new Timestamp(ts.seconds, ts.nanoseconds);
      return timestamp.toDate().getDate() + '/' + (timestamp.toDate().getMonth()+1) + '/' + timestamp.toDate().getFullYear();
    }
    catch (e) {
      return null;
    }
  }


}
