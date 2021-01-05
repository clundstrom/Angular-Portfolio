import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {TrackerService} from './tracker.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private afs: AngularFirestore, private authService: AuthService, private tr: TrackerService) {
  }

  printReads() {
    if (environment.production == false) {
      this.tr.setReads(this.tr.getReads() + 1);
      console.log('Reads: ' + this.tr.getReads());
    }
  }

  printWrites() {
    if (environment.production == false) {
    this.tr.setWrites(this.tr.getWrites() + 1);
    console.log('Reads: ' + this.tr.getWrites());
    }
  }

  getDatabaseEntryObservable(path: string) {
    this.printReads();
    return this.afs.collection(path).valueChanges();
  }

  getDatabaseDocEntryObservable(path: string, doc: string) {
    this.printReads();
    return this.afs.collection(path).doc(doc).get();
  }

  get() {
    return this.afs;
  }

  async addDatabaseEntry(path: string, object: object) {
    try {
      let ref = await this.afs.collection(path).add(Object.assign({}, object));
      await this.afs.collection(path).doc(ref.id).update({id: ref.id});
      this.printWrites();
    } catch (e) {
      if (this.authService.getAuthState() != null) {
        console.log(e);
      } else {
        console.log('Permission denied.');
      }
    }
  }

  async deleteDatabaseEntry(path: string, id) {
    try {
      this.afs.collection(path).doc(id).delete();
      console.log('Entry deleted.');
      this.printWrites();
    } catch (e) {
      console.log('Permission denied.');
    }

  }

  generateId() {
    return this.afs.createId();
  }

  async updateDatabaseEntry(path: string, documentPath: string, object: Object) {
    try {
      await this.afs.collection(path).doc(documentPath).update(object);
      console.log('Entry updated.');
      this.printWrites();
    } catch (e) {
      console.log('Permission denied.');
    }
  }


}
