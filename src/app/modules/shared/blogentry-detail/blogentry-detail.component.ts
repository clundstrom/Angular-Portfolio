import {Component, HostListener, Input, OnInit} from '@angular/core';
import {BlogEntry} from '../../../models/BlogEntry';
import {BlogService} from '../../../services/blog.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {DateFormat} from '../../../models/DateFormat';
import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-blogentry-detail',
  templateUrl: './blogentry-detail.component.html',
  styleUrls: ['./blogentry-detail.component.scss']
})
export class BlogentryDetailComponent implements OnInit {
  readonly MAX_MSG_PREVIEW_LENGTH = 500;
  loggedIn;
  date: string;
  @Input() post: BlogEntry;
  zoom;



  constructor(private blogservice: BlogService, private router: Router, private  auth: AuthService) {
  }

  ngOnInit() {
    this.date = new DateFormat().toDateString();
    this.auth.getAuthState().subscribe((auth) => {
      if (auth) {
        this.loggedIn = auth;
      }
    });
    this.zoom = mediumZoom().update({margin: 24,
      background: "transparent",
      scrollOffset: 5
    });
  }

  ngOnDestroy(){
    if(this.zoom){
      this.zoom.detach();
    }
  }

  @HostListener('click', ['$event.target'])
  onClick(element) {
    if(element.matches('img')){
      this.zoom.attach(element);
    }
  }



  edit(post: BlogEntry) {
    this.router.navigateByUrl('/post', {state: {data: post}});
  }

  delete(blogpost: BlogEntry) {
    this.blogservice.deletePost(blogpost);
  }

  showReadmeBtn(post: BlogEntry): boolean {
    if (post == null) {
      return false;
    }
    return post.message.length > this.MAX_MSG_PREVIEW_LENGTH;
  }

}
