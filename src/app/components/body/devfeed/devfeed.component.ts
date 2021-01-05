import {Component, OnInit} from '@angular/core';
import {FireStoreService} from '../../../services/fire-store.service';
import {DevEntry} from '../../../models/DevEntry';

@Component({
  selector: 'app-devfeed',
  templateUrl: './devfeed.component.html',
  styleUrls: ['./devfeed.component.scss'],
})
export class DevfeedComponent implements OnInit {

  feed: DevEntry[];
  constructor(private fs: FireStoreService) {
  }

  ngOnInit() {
    this.fs.getDatabaseEntryObservable("devfeed").subscribe( (feed) => {
      if (feed){
        this.feed = feed as DevEntry[];
        this.feed.sort((b,a) => a.created.seconds - b.created.seconds);
        this.feed = this.feed.slice(0, 9);
      }
    })
 }
}
