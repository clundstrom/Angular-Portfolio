import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;

export interface ICourse {
  id: string;
  created: Timestamp;
  name: string;
  points: number;
  start: Timestamp;
  end: Timestamp;
  active: boolean;
  completed: boolean;
  next: boolean;
}


export class Course implements ICourse{

  id: string;
  created: Timestamp;
  name: string;
  points: number;
  start: Timestamp;
  end: Timestamp;
  active: boolean;
  completed: boolean;
  next: boolean;

  constructor() {
    this.id = null;
    this.created = Timestamp.now();
    this.name = null;
    this.points = null;
    this.start = null;
    this.end = null;
    this.active = false;
    this.completed = false;
    this.next = false;
  }
}
