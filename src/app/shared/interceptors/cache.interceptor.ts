import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { filter, Observable, of, tap } from 'rxjs';
import { Post } from 'src/app/wall/interfaces/post.interface';
import { environment } from 'src/environments/environment';
const cache = new Map();

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor() {}
  
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (cache.has(request.url)) {
      const record= cache.get(request.url)
      if(record.ttl+environment.CACHE_TIME>Date.now())
        return of(cache.get(request.url));
      else
        cache.delete(request.url);
    }

    return next.handle(request).pipe(
      tap((response) => {
        if (response.type !== HttpEventType.Response) return;
        cache.set(response.url, {respons:response.clone(),ttl:Date.now()} );
        console.log('cache saving');
      })
    );
  }
}
