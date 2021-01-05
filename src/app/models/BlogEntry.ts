import {DateFormat} from './DateFormat';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;


export interface IBlogEntry {

  id: string;
  author: string;
  created: Timestamp;
  dateString: string;
  title: string;
  message: string;
  imageUrl: string;
  hidden: boolean;
}
export class BlogEntry implements IBlogEntry{
  id: string;
  author: string;
  created: Timestamp;
  dateString: string;
  title: string;
  message: string;
  imageUrl: string;
  hidden: boolean;

  constructor() {
    this.id = null;
    this.created = Timestamp.now();
    this.imageUrl = null;
    this.author = 'Christoffer';
    this.dateString = new DateFormat().toDateString();
    this.hidden = false;
  }


}
