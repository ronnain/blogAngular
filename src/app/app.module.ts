import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoslistComponent } from './poslist/poslist.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BlogService } from './blog.service';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: PoslistComponent },
  { path: 'new', component: NewPostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PoslistComponent,
    NewPostComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
