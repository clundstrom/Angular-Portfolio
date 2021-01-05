import {DateFormat} from './DateFormat';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export class DevEntry {

  dateString: string;
  message: string;
  created: Timestamp;
  id: string;

  constructor() {
    this.id = null;
    this.created = Timestamp.now();
    this.message = null;
    this.dateString = new DateFormat().toDateString();
  }
}
