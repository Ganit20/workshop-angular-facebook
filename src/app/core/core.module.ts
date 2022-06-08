import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { WallModule } from '../wall/wall.module';

import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './components/pages/home-page/not-found-page/not-found-page.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    WallModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
