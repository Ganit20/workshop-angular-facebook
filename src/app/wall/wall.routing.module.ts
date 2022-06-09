import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PostProfilePageComponent } from "./components/post-profile-page/post-profile.component";
const routes: Routes = [{
    path:':id',
    component:PostProfilePageComponent
}];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports:[RouterModule]
})
export class WallRoutingModule {}