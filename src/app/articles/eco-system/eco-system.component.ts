import { Component, OnInit, Output } from '@angular/core';

import { Link } from '../../classes/link';

@Component({
  selector: 'app-eco-system',
  templateUrl: './eco-system.component.html',
  styleUrls: ['./eco-system.component.css']
})
export class EcoSystemComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  public prefLink: Link;
  public nextLink: Link;

  constructor() {
    this.title = 'Angularエコシステム';
    this.date = new Date('2016/11/10');

    this.prefLink = new Link({
      href: '/what-is-angular.html',
      name: 'Angularって何？'
    });
    this.nextLink = new Link({
      href: '/install.html',
      name: '必要なツールをインストールしよう'
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
