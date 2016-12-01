import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements AfterViewInit {

  public display: boolean = 'localhost' !== location.hostname;

  constructor() { }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    try {
      window.PR.prettyPrint();
    } catch (e) {
      console.log(e);
    }
  }

}
