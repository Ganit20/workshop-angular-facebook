import { Post } from './../../interfaces/post.interface';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post:Post | null=null;
  constructor() { }

  ngOnInit(): void {
  }

  getPostProfileUrl():string {
    return `/posts/${this.post?.id}`
  }
}
