import { Component, OnInit } from '@angular/core';

import { Link } from '../../classes/link';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  public prefLink: Link;
  public nextLink: Link;

  constructor() {
    this.title = 'プロジェクトを作ってみよう';
    this.date = new Date('2016/11/22');

    this.prefLink = new Link({
      href: '/install.html',
      name: '必要なツールをインストールしよう'
    });
    this.nextLink = new Link({
      href: '/todos.html',
      name: 'TODOリストを作ってみよう'
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
