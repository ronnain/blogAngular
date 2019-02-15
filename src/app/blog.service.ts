import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Post } from './post';

import { HttpClient } from '@angular/common/http';

import { POSTS } from './mock-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postsSubject = new Subject<any[]>();

  private posts: Post[];

  constructor(private httpClient: HttpClient) {
    this.getPostsFromServer();
  }

  emitpostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  onLike(index:number){
    this.posts[index].loveIts ++;
    this.savePostsToServer();
  }

  onDislike(index:number){
    this.posts[index].loveIts --;
    this.savePostsToServer();
  }

  onSupprimer(index:number){
    this.posts.splice(index,1);
    this.savePostsToServer();
    this.emitpostsSubject();
  }

  addPost(newPost: Post){
    this.posts.push(newPost);
    this.savePostsToServer();
  }

  savePostsToServer() {
    this.httpClient
      .put('https://blog-angular-dcdeb.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          this.emitpostsSubject();
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }

    getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://blog-angular-dcdeb.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          console.log(this.posts);
          this.emitpostsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }

    reset() {
      this.posts = POSTS.slice();
      console.log(this.posts);
      this.savePostsToServer();
      this.emitpostsSubject();
    }

    delete(index:number){
      this.httpClient
        .delete<any[]>('https://blog-angular-dcdeb.firebaseio.com/posts/'+index+'.json')
        .subscribe(
          (response) => {
            this.emitpostsSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

}
