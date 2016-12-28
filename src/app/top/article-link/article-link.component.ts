import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.scss']
})
export class ArticleLinkComponent implements OnInit {
  @Input() title: string;
  @Input() href: string;
  @Input() discriptions: string[];
  @Input() date: string;
  discription: string;

  constructor() { }

  ngOnInit() {
    this.discription = this.discriptions.join('');
  }

}
