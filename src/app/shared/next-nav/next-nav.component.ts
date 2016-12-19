import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../../classes/link';

import { NextNavService } from './next-nav.service';

@Component({
  selector: 'next-nav',
  templateUrl: './next-nav.component.html',
  styleUrls: ['./next-nav.component.scss']
})
export class NextNavComponent implements OnInit {

  @Input('pref-link')
  public prefLink: Link;

  @Input('next-link')
  public nextLink: Link;

  constructor(private service: NextNavService) {
  }

  ngOnInit() {
    this.service.get().then(dat => {
      let navLink = dat.json()[window.location.pathname.split("/").pop()];
      if (navLink != undefined) {
        if (navLink.prefLink) this.prefLink = new Link(navLink.prefLink);
        if (navLink.nextLink) this.nextLink = new Link(navLink.nextLink);
      }
    });
  }
}
