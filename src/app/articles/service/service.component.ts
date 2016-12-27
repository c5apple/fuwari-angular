import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements AfterViewInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  constructor() {
    this.title = 'サービスを使おう';
    this.date = new Date('2016/12/28');
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
