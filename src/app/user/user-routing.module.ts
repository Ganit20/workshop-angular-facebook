import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component: ProfileComponent
  },
  {
    path:'register',
    component:SignUpComponent
  } ,
  {
    path:'logout',
    component:SignOutComponent
  } ,
  {
    path:'login',
    component:SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
