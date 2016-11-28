import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
