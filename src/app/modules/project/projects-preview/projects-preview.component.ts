import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../models/Project';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-projects-preview',
  templateUrl: './projects-preview.component.html',
  styleUrls: ['./projects-preview.component.scss']
})
export class ProjectsPreviewComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input()
  project: Project;

  ngOnInit() {
  }

  goToProject(project: Project) {
    this.router.navigate(['projects/project'], {queryParams: {'id': project.id}});
    window.scroll(0, 0);
  }
}
