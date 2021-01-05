import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/Project';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {

  constructor(private ps: ProjectService) {
  }

  projects: Project[] = [];
  color = '#1E90FF';
  loadPage = true;
  empty;

  /**
   * Fetches all projects
   */
  ngOnInit() {
    this.ps.getAllProjectsObservable().subscribe((res) => {
      if (res) {
        const validate = res as Project[];
        this.projects = this.ps.validateProjects(validate);
        if(this.projects.length == 0){
          this.empty = true;
          this.loadPage = false;
        }
      }
    });
  }


}
