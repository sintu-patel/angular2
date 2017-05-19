import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/component.app';
import { TrimString } from './components/pipe.app';
import { SearchData } from './components/search.app';
import { Home } from './pages/home/home.component';
import { Profile } from './pages/profile/profile.component';
import { Profile2 } from './pages/profile2/profile2.component';
import { routing } from './app.routes';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    TrimString,
    SearchData,
    Home,
    Profile,
    Profile2
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}