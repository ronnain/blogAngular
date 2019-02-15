import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Post } from '../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private blogService: BlogService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['titre'],
      formValue['content'],
      0,
      new Date('February 18, 2019 08:24:00')
    );
    this.blogService.addPost(newPost);
    this.router.navigate(['/']);
  }

}
