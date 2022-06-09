import { Component, OnInit } from '@angular/core';
import { Sorter } from 'src/app/shared/helpers/sorter';
import { Post } from 'src/app/wall/interfaces/post.interface';
import { PostsService } from 'src/app/wall/services/posts.service';
import fixturePosts from '../../../../../fixtures/posts.fixture.json'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  posts:Post[]=[];
  isPostsLoaded:boolean=false;
  constructor(private postsService:PostsService) { 
    this.setupPosts();
  }

  ngOnInit(): void {
  }
  private async setupPosts() {
    this.isPostsLoaded=false;
    const posts = await this.postsService.getPosts();  
    this.posts=Sorter.sortBy(posts);
    this.isPostsLoaded=true;
  }
}
