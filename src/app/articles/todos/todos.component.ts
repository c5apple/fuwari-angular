import { Component, AfterViewInit } from '@angular/core';

import { Link } from '../../classes/link';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements AfterViewInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  public prefLink: Link;
  public nextLink: Link;

  constructor() {
    this.title = 'TODOリストを作ってみよう';
    this.date = new Date('2016/12/01');

    this.prefLink = new Link({
      href: '/new-project.html',
      name: 'プロジェクトを作ってみよう'
    });
    // TODO 次のページ未作成
    this.nextLink = new Link({
      href: '/todos.html',
      name: 'コンポーネント分割してみよう ※未作成'
    });
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    try {
      window.PR.prettyPrint();
    } catch (e) {
      console.log(e);
    }
  }

}
