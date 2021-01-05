import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../models/Course';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;
import {CourseService} from '../../../services/course.service';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.scss']
})
export class CoursesAddComponent implements OnInit {

  constructor(private cService: CourseService) { }
  @Input() addCourse: Course;
  tempStart: any;
  tempEnd: any;

  ngOnInit() {
    this.addCourse = new Course();
  }

  convertTimestamp() {
    if(this.tempStart != null && this.tempEnd != null){
      let start = new Date(this.tempStart);
      let end = new Date(this.tempEnd)
      this.addCourse.start= Timestamp.fromDate(start);
      this.addCourse.end= Timestamp.fromDate(end);
    }
  }

  submit(){
    this.convertTimestamp();
    if(this.addCourse.id == null){
      this.cService.addCourse(this.addCourse)
    }
    else {
      this.cService.updateCourse(this.addCourse);
    }

  }

  resetCourse() {
    this.addCourse = new Course();
  }
}
