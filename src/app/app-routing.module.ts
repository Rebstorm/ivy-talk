import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Slide1Component} from './slides/slide1/slide1.component';


const routes: Routes = [
  { path : '', component: Slide1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
