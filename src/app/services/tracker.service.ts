import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  private _clientReads: number = 0;
  private _clientWrites: number = 0;

  constructor() {
  }

  getReads(): number {
      return this._clientReads;
  }

  setReads(clientCache: number): void {
      this._clientReads = clientCache;
  }

  getWrites(): number {
      return this._clientWrites;
  }

  setWrites(num: number) {
      this._clientWrites = num;
  }

}
