import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  isHovering: boolean;
  files: File[] = [];
  constructor() { }

  ngOnInit() {
  }

  toggleHover(event: boolean){
    this.isHovering = event;
  }

  onDrop(files: FileList){
    for(let i = 0; i < files.length; i++){
      this.files.push(files.item(i));
    }
  }
}
