import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public showOriginalImage(element): void {
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
