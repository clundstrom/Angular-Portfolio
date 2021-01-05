import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {BlogEntry} from '../../models/BlogEntry';
import {ActivatedRoute, Router} from '@angular/router';
import 'firebase/firestore';

@Component({
  selector: 'app-blogfeed',
  templateUrl: './blogfeed.component.html',
  styleUrls: ['./blogfeed.component.scss']
})
export class BlogfeedComponent implements OnInit {


  constructor(private blogservice: BlogService, private router: Router, private route: ActivatedRoute) {
  }

  posts: BlogEntry[];
  p: number = 1;
  color = '#1E90FF';
  outOfPosts: boolean = false;

  ngOnInit() {
    this.posts = [];
    this.route.queryParams
      .subscribe(params => {
        if (params['post']) {
          const postId = params['post'];
          this.blogservice.getPostById(postId).subscribe((res) => {
            if (res) {
              this.posts = [res.data()] as BlogEntry[];
            }
          });
        } else {
          this.blogservice.getPostsObservable(3).then((res) => {
            if (res) {
              this.posts = res as BlogEntry[];
              this.posts.sort((b, a) => a.created.seconds - b.created.seconds);
              this.posts = this.blogservice.validatePosts(this.posts);
            }
          });
        }
      });
  }

  /**
   * Fetches the next page of the pagination.
   */
  nextPage() {
    this.blogservice.getNextPosts(3).then((res) => {
      if (res) {
        let temp = [];
        res.forEach((entry) => temp.push(entry as BlogEntry));
        temp.sort((b, a) => a.created.seconds - b.created.seconds);
        temp = this.blogservice.validatePosts(temp);
        temp.forEach((res) => this.posts.push(res));
      } else {
        this.outOfPosts = true;
      }
    });
  }
}
