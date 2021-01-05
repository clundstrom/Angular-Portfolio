import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {Course} from '../../../models/Course';
import {DateFormatterService} from '../../../services/date-formatter.service';

@Component({
  selector: 'app-courses-admin',
  templateUrl: './courses-admin.component.html',
  styleUrls: ['./courses-admin.component.scss']
})
export class CoursesAdminComponent implements OnInit {


  constructor(private cs: CourseService, private format: DateFormatterService) { }

  courses: Course[];
  tempCourse: Course;
  currentScore: number;
  totalScore: number = 0;

  ngOnInit() {
    this.tempCourse = new Course();
    this.cs.getAllCoursesObservable().subscribe((res) => {
      if(res){
        this.courses = res as Course[];
        this.courses.sort((a,b) => a.name.localeCompare(b.name));
        this.totalScore = 0;
        this.currentScore = 0;
        for(let course of this.courses){
          this.totalScore += +course.points;
          if(course.completed){
            this.currentScore += +course.points;
          }
        }
      }
    });


  }

  getTimeStamp(ts){
    return this.format.timeStampToDateString(ts);
  }

  getActiveStatus(course){
      if(course.active){
        return 'X';
      }

  }
  deleteCourse(course: Course) {
    this.cs.deleteCourse(course);
  }

  getScore(){

  }
}

