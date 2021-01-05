import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsOverviewComponent} from './projects-overview/projects-overview.component';
import {ProjectsComponent} from './projects/projects.component';


const routes: Routes = [
  {path: 'project', component: ProjectsComponent},
  {path: '', component: ProjectsOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRouting {
}
