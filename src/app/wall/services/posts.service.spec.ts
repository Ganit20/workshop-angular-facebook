import { User } from './../interfaces/user.interface';
import { environment } from './../../../environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../interfaces/post.interface';
import { PostsService } from './posts.service';
import { postFactory } from 'src/mocks/post.factory';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 

  it('should make http request when get posts', async () => {
    const request = service.getPosts();
    const response = httpMock.expectOne(environment.postsUrl)
    response.flush([postFactory()]);
    const posts=await request;
    expect(posts.length).toEqual(1);
  });
});
