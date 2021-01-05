import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {Course} from '../../../models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],

})
export class CoursesComponent implements OnInit {

  total: number = 180;
  percent: number;
  currentPoints: number;
  next: Course[];
  current: Course[];
  hide = false;
  constructor(private cs: CourseService) { }

  ngOnInit() {
  this.cs.getAllCoursesObservable().subscribe((res)=> {
    if(res){
      let courses = res as Course[];
      this.next = [];
      this.current = [];
      this.currentPoints = 0;
      for(let course of courses){
        if(course.completed == true){
          this.currentPoints += +course.points;
        }
        if(course.next == true){
          this.next.push(course);
        }
        if(course.active == true){
          this.current.push(course);
        }
      }
    }
    this.percent = Math.round((this.currentPoints/this.total)*100);
  });

  }


  setWidth() {
    return {
      'width:': this.percent
    };
  }


}
