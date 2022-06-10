import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { OnlyForAuthUserGuard } from '../user.guards/only-for-auth-user.guard';

const routes: Routes = [
  {
    path:'',
    component: ProfileComponent,
    canActivate:[OnlyForAuthUserGuard]
  },
  {
    path:'register',
    component:SignUpComponent
  } ,
  {
    path:'logout',
    component:SignOutComponent,
    canActivate:[OnlyForAuthUserGuard]
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
