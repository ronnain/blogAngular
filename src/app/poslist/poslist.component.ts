import { Component, OnInit } from '@angular/core';

import { Post } from '../post';

import { POSTS } from '../mock-post';


@Component({
  selector: 'app-poslist',
  templateUrl: './poslist.component.html',
  styleUrls: ['./poslist.component.scss']
})
export class PoslistComponent implements OnInit {

  posts:Post[];

  constructor() { }

  ngOnInit() {
    this.posts = POSTS;
    console.log(this.posts);
  }

  onLike(index:number){
    this.posts[index].loveIts ++;
  }

  onDislike(index:number){
    this.posts[index].loveIts --;
  }

}
