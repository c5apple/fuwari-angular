import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent implements OnInit {

  public title: string;
  public date: Date;

  constructor() {
    this.title = '必要なツールをインストールしよう';
    this.date = new Date('2016/11/20');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public showOriginalImage(element: any): void {
    let modal = document.getElementById('image-modal');

    if (modal) {
      modal.className = 'modal animated fadeIn is-active';
      const img = modal.querySelector('img');
      if (img) {
        img.src = element.target.src;
      }
    }
  }

  public hideOriginalImage(): void {
    let modal = document.getElementById('image-modal');

    if (modal) {
      modal.className = 'modal animated fadeOut is-active';
      setTimeout(() => {
        if (modal) {
          modal.className = 'modal animated';
        }
      }, 800);
    }
  }
}
