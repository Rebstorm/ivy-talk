import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Slide1Component} from './slides/slide1/slide1.component';
import {Slide2Component} from './slides/slide2/slide2.component';


const routes: Routes = [
  { path : '', component: Slide1Component, data: { error: false} },
  { path : 'slide1', component: Slide1Component, data: { error: false} },
  { path : 'slide2', component: Slide2Component },
  { path : '**', component: Slide1Component, data: {error : true}  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
