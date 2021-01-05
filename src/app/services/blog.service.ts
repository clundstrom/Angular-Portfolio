import {Injectable} from '@angular/core';
import {FireStoreService} from './fire-store.service';
import {BlogEntry} from '../models/BlogEntry';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Timestamp = firebase.firestore.Timestamp;
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private fss: FireStoreService) {
  }

  lastVisible;

  /**
   * Fetches all posts from db as an observable.
   */
  getAllPostsObservable(): Observable<unknown[]> {
    return this.fss.getDatabaseEntryObservable('blogentries');
  }

  /**
   * Fetches paginated posts from db as an observable
   */
  getPostsObservable(limit) {
    let ref = this.fss.get().collection('blogentries').ref;
    let query = ref.orderBy('created', 'desc').limit(limit).get();
    let posts = query.then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No docs found.');
      } else {
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        return querySnapshot.docs.map((res) => {
          return res.data();
        });
      }
    });
    return posts;
  };

  /**
   * Fetches paginated posts from db as an observable
   */
  getNextPosts(limit) {
    let ref = this.fss.get().collection('blogentries').ref;
    let query = ref.orderBy('created', 'desc').startAfter(this.lastVisible).limit(limit).get();
    let posts = query.then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No docs found.');
      } else {
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        return querySnapshot.docs.map((res) => {
          return res.data();
        });
      }
    });
    return posts;
  };

  /**
   * Adds post to DB.
   * @param blogPost
   */
  async addPost(blogPost: BlogEntry) {
    await this.fss.addDatabaseEntry('blogentries', blogPost)
  }

  /**
   * Archives and deletes poss from DB.
   * @param blogpost
   */
  async deletePost(blogpost: BlogEntry): Promise<void> {
    try {
      let ref = await this.fss.get().collection('archived').add(Object.assign({}, blogpost));
      await this.fss.get().collection('archived').doc(ref.id).update({id: ref.id});
    } catch (e) {
      console.log('Permission denied.');
    }
    await this.fss.deleteDatabaseEntry('blogentries', blogpost.id);
  }

  /**
   * Fetch Observable of DB PostCounter.
   */
  getPostCount() {
    return this.fss.get().collection('api').doc('counter').valueChanges();
  }


  /**
   * Updates db entry of Blogpost.
   * @param blogPost
   */
  updatePost(blogPost: BlogEntry): void {
    this.fss.updateDatabaseEntry('blogentries', blogPost.id, blogPost);
  }

  /**
   * Fetches post based on id.
   * @param id String based on firebase generated id.
   */
  getPostById(id: string): Observable<firebase.firestore.DocumentSnapshot> {
    return this.fss.getDatabaseDocEntryObservable('blogentries', id);
  }

  /**
   * Filters posts that are hidden or scheduled for later.
   * @param posts Blogentries
   */
  validatePosts(posts: BlogEntry[]): BlogEntry[] {
    let today = Timestamp.now();
    return posts.filter((post) => post.hidden == false && post.created.seconds < today.seconds);
  }
}
