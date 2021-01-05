import {Component, Input, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {UploadTaskSnapshot} from '@angular/fire/storage/interfaces';
import {AngularFirestore} from '@angular/fire/firestore';
import {UploadService} from '../../../../services/upload.service';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {


  @Input() file: File;

  private task: AngularFireUploadTask;
  private percentage: Observable<number>;
  private snapshot: Observable<UploadTaskSnapshot>;

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore, private uploadService: UploadService) {
  }

  ngOnInit(): void {
    this.uploadService.uploadFile(this.file, 'images');
    this.task = this.uploadService.getTask();
  }

  isActive(snapshot: UploadTaskSnapshot): boolean {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  getUrl(){
    return this.uploadService.getImageUrl();
  }

  getPercentage(){
    return this.uploadService.getPercentage();
  }

  getSnapShot(){
    return this.uploadService.getSnapshot();
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
