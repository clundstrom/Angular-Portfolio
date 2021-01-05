import { Injectable } from '@angular/core';
import {FireStoreService} from './fire-store.service';
import {Course} from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private fss: FireStoreService) { }

  getAllCoursesObservable(){
    return this.fss.getDatabaseEntryObservable('courses');
  }

  addCourse(course: Course){
    this.fss.addDatabaseEntry('courses', course);
  }

  deleteCourse(course: Course) {
    this.fss.deleteDatabaseEntry('courses', course.id)
  }

  updateCourse(course: Course) {
    this.fss.updateDatabaseEntry('courses', course.id, course);
  }

  getCourseById(id: string){
    return this.fss.getDatabaseDocEntryObservable('courses', id);
  }
}
