import {DateFormat} from './DateFormat';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;

export abstract class Publishable {
  id: string;
  author: string;
  created: Timestamp;
  dateString: string;
  title: string;
  message: string;
  imageUrl: string;
  hidden: boolean;

  protected constructor() {
    this.id = null;
    this.created = Timestamp.now();
    this.imageUrl = null;
    this.author = 'Christoffer';
    this.dateString = new DateFormat().toDateString();
    this.hidden = false;
  }
}
