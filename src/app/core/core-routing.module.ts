import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { OnlyForAuthUserGuard } from '../user.guards/only-for-auth-user.guard';

const routes: Routes = [
    {
      path: '',
      component:HomePageComponent
    },
    {
      path:'posts',
      loadChildren: () => import('../wall/wall.routing.module').then(x=> x.WallRoutingModule)
    },
    {
      path:'profile',
      loadChildren: () => import('../user/user-routing.module').then(x=> x.UserRoutingModule),
    },
    {
      path:'**',
      component: NotFoundPageComponent
    },
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
