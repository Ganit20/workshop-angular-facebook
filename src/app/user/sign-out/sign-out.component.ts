import { UserService } from './../../wall/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {
  isLogoutFinishedSuccess=false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.isLogoutFinishedSuccess=this.userService.signOut()
  }

}
