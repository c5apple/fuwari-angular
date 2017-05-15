import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements AfterViewInit {

  public title: string;
  public date: Date;

  constructor() {
    this.title = 'TODOリストを作ってみよう';
    this.date = new Date('2016/12/01');
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    try {
      (<any>window).PR.prettyPrint();
    } catch (e) {
      console.log(e);
    }
  }

}
