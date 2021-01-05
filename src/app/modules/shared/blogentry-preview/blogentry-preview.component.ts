import {Component, Input, OnInit} from '@angular/core';
import {BlogEntry} from '../../../models/BlogEntry';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blogentry-preview',
  templateUrl: './blogentry-preview.component.html',
  styleUrls: ['./blogentry-preview.component.scss']
})
export class BlogentryPreviewComponent implements OnInit {

  @Input() post: BlogEntry;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  goToPost(post: BlogEntry){
    this.router.navigate(['/blog'], {queryParams: {post: post.id}});
    window.scroll(0,0);
  }
}
