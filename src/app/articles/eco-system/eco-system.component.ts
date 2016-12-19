import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-system',
  templateUrl: './eco-system.component.html',
  styleUrls: ['./eco-system.component.scss']
})
export class EcoSystemComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  constructor() {
    this.title = 'Angularエコシステム';
    this.date = new Date('2016/11/10');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
