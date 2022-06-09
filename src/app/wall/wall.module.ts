import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [PostListComponent],
  providers:[PostsService]
})
export class WallModule { }
