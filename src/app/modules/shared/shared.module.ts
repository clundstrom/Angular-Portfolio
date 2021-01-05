import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogentryDetailComponent} from './blogentry-detail/blogentry-detail.component';
import {BlogentryPreviewComponent} from './blogentry-preview/blogentry-preview.component';
import {MarkdownModule} from 'ngx-markdown';
import {UploadTaskComponent} from './upload/upload-task/upload-task.component';
import {UploaderComponent} from './upload/uploader/uploader.component';
import {BlogEditorComponent} from '../admin/blog-editor/blog-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';
import {DropzoneDirective} from '../../events/dropzone.directive';



@NgModule({
  declarations: [
    BlogentryDetailComponent,
    BlogentryPreviewComponent,
    BlogEditorComponent,
    UploadTaskComponent,
    DropzoneDirective,
    UploaderComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    FormsModule,
    LMarkdownEditorModule,
    ReactiveFormsModule
  ],
  exports: [
    BlogentryDetailComponent,
    BlogentryPreviewComponent,
    BlogEditorComponent,
    UploadTaskComponent,
    UploaderComponent
  ]
})
export class SharedModule { }
