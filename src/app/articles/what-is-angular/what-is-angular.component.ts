import { Component, OnInit } from '@angular/core';

import { Link } from '../../classes/link';

@Component({
  selector: 'app-what-is-angular',
  templateUrl: './what-is-angular.component.html',
  styleUrls: ['./what-is-angular.component.css']
})
export class WhatIsAngularComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  public prefLink: Link;
  public nextLink: Link;

  constructor() {
    this.title = 'Angularって何？';
    this.date = new Date('2016/11/9');

    this.prefLink = new Link({
      href: '/',
      name: 'ふわりAngular'
    });
    this.nextLink = new Link({
      href: '/eco-system.html',
      name: 'Angularエコシステム'
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
