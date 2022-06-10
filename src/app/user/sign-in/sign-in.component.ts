import { Router } from '@angular/router';
import { UserService } from './../../wall/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/wall/interfaces/user.interface';


type MyNullable<T> = {
  [P in keyof T]?: T[P] | null;
};
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  credentials:MyNullable<Credentials> = {
    email: null,
    password: null
  }
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    const status=this.userService.signIn(this.credentials as Credentials)
    if(status)  
      this.router.navigateByUrl('profile')
  }
}
