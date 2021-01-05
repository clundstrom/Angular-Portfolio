import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {PostsAdminComponent} from './posts-admin/posts-admin.component';
import {CoursesAdminComponent} from './courses-admin/courses-admin.component';
import {CoursesAddComponent} from './courses-add/courses-add.component';
import {DevfeedAdminComponent} from './devfeed-admin/devfeed-admin.component';
import {ChristmasComponent} from '../../components/body/themes/christmas/christmas.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';
import {DevfeedComponent} from '../../components/body/devfeed/devfeed.component';
import { ProjectsAdminComponent } from './projects-admin/projects-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    PostsAdminComponent,
    CoursesAdminComponent,
    CoursesAddComponent,
    DevfeedAdminComponent,
    ChristmasComponent,
    DevfeedComponent,
    ProjectsAdminComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LMarkdownEditorModule,
    FormsModule
  ]
})
export class AdminModule {
}
