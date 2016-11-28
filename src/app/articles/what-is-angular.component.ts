import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is-angular',
  templateUrl: './what-is-angular.component.html',
  styleUrls: ['./what-is-angular.component.css']
})
export class WhatIsAngularComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
