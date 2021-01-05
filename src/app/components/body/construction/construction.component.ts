import { Component, OnInit } from '@angular/core';
import {ApistatusService} from '../../../services/apistatus.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {

  constructor(private api: ApistatusService) { }

  status: boolean;

  ngOnInit() {
    this.api.getStatus().subscribe((data) => {
      if (data) {
        let last_online = data['last_online'] as Timestamp
        this.status = (Timestamp.now().seconds - last_online.seconds) <= 60 *45
      }
    });
  }

}
