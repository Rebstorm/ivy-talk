import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Slide1Component } from './slides/slide1/slide1.component';
import { Slide2Component } from './slides/slide2/slide2.component';

@NgModule({
  declarations: [
    AppComponent,
    Slide1Component,
    Slide2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
