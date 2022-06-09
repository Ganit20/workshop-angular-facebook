import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Post } from '../interfaces/post.interface';
import {  resolve } from 'cypress/types/bluebird';
import { delay, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { } 
  getPosts()  {
    return this.makeRequest<Post[]>(environment.postsUrl);
  }

  private makeRequest<T>(url:string): Promise<T> {
    return lastValueFrom<T>(this.http.get<T>(url));
  }

}
