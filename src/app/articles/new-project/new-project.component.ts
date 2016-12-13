import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  constructor() {
    this.title = 'プロジェクトを作ってみよう';
    this.date = new Date('2016/11/22');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
