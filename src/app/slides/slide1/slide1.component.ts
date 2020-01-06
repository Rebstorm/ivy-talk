import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.scss']
})
export class Slide1Component implements OnInit {
  areWeLost = false;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.data.subscribe(data => data.error ? this.areWeLost = true : this.areWeLost = false);
  }

}
