import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HighlightService} from '../../../services/highlight.service';
import {BlogService} from '../../../services/blog.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;
import {DateFormatterService} from '../../../services/date-formatter.service';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/Project';
import {BlogEntry} from '../../../models/BlogEntry';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent implements OnInit {

  constructor(private highlightService: HighlightService,
              private bs: BlogService,
              private ps: ProjectService,
              public activatedRoute: ActivatedRoute,
              private format: DateFormatterService) {
  }

  private state$: Observable<object>;

  isProject: boolean = false;
  editMode: boolean = false;
  editorForm: FormGroup;
  highlighted: boolean = false;
  publishable;
  datePick: Date;
  selectedFile = null;

  // Options for Editor
  public options = {
    showPreviewPanel: false,
    showBorder: true,
    usingFontAwesome5: true,
    scrollPastEnd: 10,
    enablePreviewContentClick: true,
    resizable: true,
  };

  public model = {
    editorData: ''
  };
  projectSpecific;

  ngAfterViewChecked() {
    if (this.model.editorData && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit() {
    this.datePick = new Date();
    this.publishable = new BlogEntry();
    this.editorForm = new FormGroup({
      'header': new FormControl(''),
      'imageUrl': new FormControl(''),
      'author': new FormControl(''),
      'hidden': new FormControl(false),
      'isProject': new FormControl(false),
      'date': new FormControl()
    });

    this.projectSpecific = new FormGroup({
      'tag': new FormControl(),
      'srcURL': new FormControl(),
      'backgroundImage': new FormControl(),
      'description': new FormControl()
    });

    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.data));

    // Subscribe to Observable if passed with routerlink.
    if (this.state$ != null) {
      this.state$.subscribe((publishable) => {
        if (publishable) {
          this.editMode = true;
          this.publishable = publishable;
          if (publishable['tags']) {
            this.isProject = true;
          }
        }
      });
    }
  }

  hasFields(): boolean {
    return this.publishable.title != null && this.publishable.message != null;
  }


  /*
    Passes BlogEntry or Project to backend service for updating or adding.
   */
  submit() {
    if (this.editMode == true && !this.isProject) {
      this.bs.updatePost(this.publishable);
    } else if (this.editMode == false && !this.isProject) {
      this.bs.addPost(this.publishable);
    } else if (this.editMode == true && this.isProject) {
      this.ps.updateProject(this.publishable);
    } else if (this.editMode == false && this.isProject) {
      this.ps.addProject(this.publishable);
    } else {
      console.error('A selection must be made.');
    }
  }

  convertTimestamp() {
    let date = new Date(this.datePick);
    this.publishable.created = Timestamp.fromDate(date);
    this.publishable.dateString = this.format.dateToString(date);
  }

  /*
    Returns formatted datestring.
   */
  getCreated() {
    if (this.publishable.created != null) {
      let ts = this.publishable.created as Timestamp;
      return this.format.timeStampToDateString(ts);
    }
  }

  /*
    Adds a tag to project's tag array.
   */
  addTag() {
    if (this.publishable.tags) {
      this.publishable.tags.push(this.projectSpecific.value.tag);
    }
  }

  /*
    Converts object to BlogEntry or Project based on event value from Checkbox.
   */
  convertToProject($event) {
    if ($event.target.checked) {
      this.isProject = true;
      this.publishable = new Project();
    } else {
      this.isProject = false;
      this.publishable = new BlogEntry();
    }
  }

  removeTag(tag) {
    this.publishable.tags.splice(this.publishable.tags.indexOf(tag), 1);
  }
}

