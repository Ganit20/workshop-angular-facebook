import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './components/post-profile-page/post-profile.component';
import { WallRoutingModule } from './wall.routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostProfilePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    WallRoutingModule,
    NgxPaginationModule 
  ],
  exports: [PostListComponent],
  providers:[PostsService]
})
export class WallModule { }
