import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/component.app';
import { TrimString } from './components/pipe.app';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TrimString
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}