import { Component, OnInit } from '@angular/core';

import { Link } from '../../classes/link';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {

  public display: boolean = 'localhost' !== location.hostname;

  public title: string;
  public date: Date;

  public prefLink: Link;
  public nextLink: Link;

  constructor() {
    this.title = '必要なツールをインストールしよう';
    this.date = new Date('2016/11/20');

    this.prefLink = new Link({
      href: '/eco-system.html',
      name: 'Angularエコシステム'
    });
    this.nextLink = new Link({
      href: '/new-project.html',
      name: 'プロジェクトを作ってみよう'
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public showOriginalImage(element: any): void {
    let modal = document.getElementById('image-modal');

    modal.className = 'modal animated fadeIn is-active';
    modal.querySelector('img').src = element.target.src;
  }

  public hideOriginalImage(): void {
    let modal = document.getElementById('image-modal');

    modal.className = 'modal animated fadeOut is-active';
    setTimeout(() => {
      modal.className = 'modal animated';
    }, 800);
  }
}
