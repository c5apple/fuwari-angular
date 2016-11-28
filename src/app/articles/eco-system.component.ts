import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-system',
  templateUrl: './eco-system.component.html',
  styleUrls: ['./eco-system.component.css']
})
export class EcoSystemComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
