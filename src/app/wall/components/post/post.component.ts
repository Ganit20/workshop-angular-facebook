import { Post } from './../../interfaces/post.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post:Post | null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
