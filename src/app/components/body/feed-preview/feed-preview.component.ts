import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../services/blog.service';
import {BlogEntry} from '../../../models/BlogEntry';
import 'firebase/firestore';

@Component({
  selector: 'app-feed-preview',
  templateUrl: './feed-preview.component.html',
  styleUrls: ['./feed-preview.component.scss']
})
export class FeedPreviewComponent implements OnInit {

  constructor(private blogservice: BlogService) {
    this.blogservice.getPostCount().subscribe((res) => {
      if (res) {
        this.postCount = res['postCount'] as number;
      }
    });
  }

  color = '#1E90FF';
  postCount;
  posts: BlogEntry[];
  p: number = 1;
  lastPage: number = 0;


  ngOnInit() {
    this.posts = [];

    this.blogservice.getPostsObservable(6).then((res) => {
      if (res) {
        this.posts = res as BlogEntry[];
        this.posts.sort((b, a) => a.created.seconds - b.created.seconds);
        this.posts = this.blogservice.validatePosts(this.posts);
      }
    });
  }

  changePage($event: number) {
    //todo fix sorting so timestamp isnt fucked up..
    if ($event > this.lastPage) {
      this.lastPage = this.p;
      this.blogservice.getNextPosts(3).then((res) => {
        if (res) {
          let temp = [];
          res.forEach((entry) => temp.push(entry as BlogEntry));
          temp.sort((b, a) => a.created.seconds - b.created.seconds);
          temp = this.blogservice.validatePosts(temp);
          this.posts = [...this.posts, ...temp] as BlogEntry[];
        }
      });
    }
    return $event;
  }
}
