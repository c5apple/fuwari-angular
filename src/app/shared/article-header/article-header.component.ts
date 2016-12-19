import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public date: Date;

  public formatedDate: string;

  ngOnInit() {
    this.formatedDate = this.date.getFullYear() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getDate();
  }
}
