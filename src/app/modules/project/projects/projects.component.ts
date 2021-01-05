import {Component, OnInit} from '@angular/core';
import {Project} from '../../../models/Project';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProjectService) {
  }

  project;

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams['id']) {
        const id = queryParams['id']
        this.ps.getProjectsById(id).subscribe((res) => {
          if (res) {
            this.project = res.data() as Project;
          }
        });
      } else {
        this.router.navigate(['/404']);
      }
    });
  }
};
