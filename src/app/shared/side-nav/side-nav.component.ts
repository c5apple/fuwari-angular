import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../articles/articles.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  links: any[];
  locationPath: string;

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.links = this.articlesService.links;
  }
}
