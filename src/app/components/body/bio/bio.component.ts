import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../services/blog.service';
import {BlogEntry} from '../../../models/BlogEntry';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  post;

  constructor(private blogservice: BlogService) {
  }

  ngOnInit() {
    this.blogservice.getPostById('y0KtzCzAAYEgZEkBTKPO').subscribe((post) => {
      if (post){
        this.post = post.data() as BlogEntry;
      }
    })
  }
}
