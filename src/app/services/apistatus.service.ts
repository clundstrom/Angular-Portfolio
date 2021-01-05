import {Injectable} from '@angular/core';
import {FireStoreService} from './fire-store.service';

@Injectable({
  providedIn: 'root'
})
export class ApistatusService {

  constructor(private fs: FireStoreService) {
  }

  getStatus() {
    return this.fs.get().collection('api').doc('j087hhlFv3IHzcz89OAZ').valueChanges();
  }
}
