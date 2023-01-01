import { Component, OnInit } from '@angular/core';

import { Link } from '../../classes/link';

import { ArticlesService } from '../../articles/articles.service';

@Component({
  selector: 'next-nav',
  templateUrl: './next-nav.component.html',
  styleUrls: ['./next-nav.component.scss']
})
export class NextNavComponent implements OnInit {

  public prefLink?: Link;
  public nextLink?: Link;

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    let navLink = this.articlesService.navLinks('/'.concat(window.location.pathname.split('/').pop() || ''));
    if (navLink !== undefined) {
      if (navLink['prefLink']) this.prefLink = new Link(navLink.prefLink);
      if (navLink['nextLink']) this.nextLink = new Link(navLink.nextLink);
    }
  }
}
