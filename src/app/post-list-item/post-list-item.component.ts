import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

@Input() post: Post;
@Input() index: number;



  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }


  onLike(){
    this.blogService.onLike(this.index);
  }

  onDislike(index:number){
    this.blogService.onDislike(this.index);
  }

  onSupprimer(index:number){
    this.blogService.onSupprimer(this.index);
  }

}
