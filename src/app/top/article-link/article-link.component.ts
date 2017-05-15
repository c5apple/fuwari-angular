import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../../articles/articles.service';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.scss']
})
export class ArticleLinkComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() href: string;
  @Input() discriptions: string[];
  @Input() date: string;
  discription: string;
  @Input() columnSize: number;

  constructor(private service: ArticlesService) { }

  ngOnInit() {
    if (this.id) {
      const article = this.service.articleLinks.filter(article => article.id === this.id).shift();
      this.title = article.title;
      this.href = article.href;
      this.discriptions = article.discriptions;
      this.date = article.date;
    }
    this.discription = this.discriptions.join('');
  }

}
