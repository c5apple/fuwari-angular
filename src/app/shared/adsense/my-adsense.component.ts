import { Component } from '@angular/core';

@Component({
  selector: 'ads',
  templateUrl: './my-adsense.component.html',
  styleUrls: ['./my-adsense.component.scss']
})
export class MyAdsenseComponent {

  public display: boolean = 'localhost' !== location.hostname;

}
