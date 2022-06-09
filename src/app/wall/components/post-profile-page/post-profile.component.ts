import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.scss']
})
export class PostProfilePageComponent implements OnInit {
  post: Post|null = null;
  constructor(private activatedRoute:ActivatedRoute,private postService:PostsService,private router:Router) { }

  async ngOnInit(): Promise<void> {
   const postid = this.activatedRoute.snapshot.params['id'];
   try{
   this.post=await this.postService.getPostsById(postid);
   if(!this.post)
    throw new Error;
   }
   catch {
    this.router.navigateByUrl('not-found');
   }
  
  }

}
