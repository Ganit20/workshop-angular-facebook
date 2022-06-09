import { NotFoundPageComponent } from './components/pages/home-page/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component:HomePageComponent
    },
    {
      path:'**',
      component: NotFoundPageComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes. {useHash:true})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
