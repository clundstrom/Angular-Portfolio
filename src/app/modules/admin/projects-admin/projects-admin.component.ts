import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../../../models/Project';
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'app-projects-admin',
  templateUrl: './projects-admin.component.html',
  styleUrls: ['./projects-admin.component.scss']
})
export class ProjectsAdminComponent implements OnInit {

  constructor(private bs: ProjectService, private router: Router) { }

  projects: Project[];
  ngOnInit() {

    this.bs.getAllProjectsObservable().subscribe( (posts) => {
      if(posts){
        this.projects = posts as Project[];
        this.projects.sort( (b,a) => a.created.seconds - b.created.seconds);

      }
    })
  }

  async delete(project: Project){
    await this.bs.deleteProject(project);
  }

  edit(project: Project){
    this.router.navigateByUrl('/post', {state: {data: project}});
  }

}
