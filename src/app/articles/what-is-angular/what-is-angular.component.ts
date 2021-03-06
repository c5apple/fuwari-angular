import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is-angular',
  templateUrl: './what-is-angular.component.html',
  styleUrls: ['./what-is-angular.component.scss']
})
export class WhatIsAngularComponent implements OnInit {

  public title: string;
  public date: Date;

  constructor() {
    this.title = 'Angularって何？';
    this.date = new Date('2016/11/9');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
