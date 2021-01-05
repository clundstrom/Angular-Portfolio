import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from './projects/projects.component';
import {SharedModule} from '../shared/shared.module';
import {ProjectRouting} from './project-routing.module';
import {FormsModule} from '@angular/forms';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ProjectsPreviewComponent } from './projects-preview/projects-preview.component';
import {BlogfeedModule} from '../blogfeed/blogfeed.module';
import {MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsOverviewComponent,
    ProjectsPreviewComponent
  ],
  imports: [
    SharedModule,
    ProjectRouting,
    BlogfeedModule,
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [
  ]
})
export class ProjectModule { }
