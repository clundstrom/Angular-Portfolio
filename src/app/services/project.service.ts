import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FireStoreService} from './fire-store.service';
import {Project} from '../models/Project';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private fss: FireStoreService) { }


  /**
   * Fetches all posts from db as an observable.
   */
  getAllProjectsObservable(): Observable<unknown[]>{
    return this.fss.getDatabaseEntryObservable('projects');
  }

  /**
   * Adds post to DB.
   * @param blogPost
   */
  addProject(project: Project): void{
    this.fss.addDatabaseEntry('projects', project);
  }

  /**
   * Archives and deletes poss from DB.
   * @param project
   */
  async deleteProject(project: Project): Promise<void> {
    try {
      let ref = await this.fss.get().collection('archived-projects').add(Object.assign({}, project));
      await this.fss.get().collection('archived-projects').doc(ref.id).update({id: ref.id});
    } catch (e) {
      console.log('Permission denied.');
    }
    this.fss.deleteDatabaseEntry('projects', project.id)
  }

  /**
   * Updates db entry of Blogpost.
   * @param project
   */
  updateProject(project: Project): void {
    this.fss.updateDatabaseEntry('projects', project.id, project);
  }

  /**
   * Fetches post based on id.
   * @param id String based on firebase generated id.
   */
  getProjectsById(id: string): Observable<firebase.firestore.DocumentSnapshot>{
    return this.fss.getDatabaseDocEntryObservable('projects', id);
  }

  /**
   * Filters posts that are hidden or scheduled for later.
   * @param projects Blogentries
   */
  validateProjects(projects: Project[]): Project[]{
    let today = Timestamp.now();
    return projects.filter( (project) => project.hidden == false && project.created.seconds < today.seconds);
  }
}
