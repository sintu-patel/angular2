import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/component.app';
import { TrimString } from './components/pipe.app';
import { SearchData } from './components/search.app';
import { Home } from './pages/home/home.component';
import { Profile } from './pages/profile/profile.component';
import { routing } from './app.routes';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    TrimString,
    SearchData,
    Home,
    Profile
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}