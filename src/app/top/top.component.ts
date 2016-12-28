import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles/articles.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public articleLinks: any[] = [];

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.articleLinks = this.articlesService.links;
  }

}
