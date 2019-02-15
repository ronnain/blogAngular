import { Component, OnDestroy, OnInit } from '@angular/core';

import { Post } from '../post';

import { BlogService } from '../blog.service';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-poslist',
  templateUrl: './poslist.component.html',
  styleUrls: ['./poslist.component.scss']
})
export class PoslistComponent  implements OnInit, OnDestroy {

  posts: any[];
  postSubscription: Subscription;


  constructor(private blogService: BlogService) {
    console.log("constructeur postSubscription : "+this.postSubscription);
  }

  ngOnInit() {
    this.postSubscription = this.blogService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.blogService.emitpostsSubject();

  }


  onReset() {
    this.blogService.reset();
  }




  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }






}
