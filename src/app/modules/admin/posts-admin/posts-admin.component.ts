import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../services/blog.service';
import {BlogEntry} from '../../../models/BlogEntry';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts-admin',
  templateUrl: './posts-admin.component.html',
  styleUrls: ['./posts-admin.component.scss']
})
export class PostsAdminComponent implements OnInit {

  constructor(private bs: BlogService, private router: Router) { }

  posts: BlogEntry[];
  ngOnInit() {

    this.bs.getAllPostsObservable().subscribe( (posts) => {
      if(posts){
        this.posts = posts as BlogEntry[];
        this.posts.sort( (b,a) => a.created.seconds - b.created.seconds);

      }
    })
  }

  async delete(post: BlogEntry){
    await this.bs.deletePost(post);
  }

  edit(post: BlogEntry){
    this.router.navigateByUrl('/post', {state: {data: post}});
  }


}
