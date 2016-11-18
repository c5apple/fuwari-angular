import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ads',
  templateUrl: './adsense.component.html',
  styleUrls: ['./adsense.component.css']
})
export class AdsenseComponent implements AfterViewInit {

  ngAfterViewInit() {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {

    }
  }

}
