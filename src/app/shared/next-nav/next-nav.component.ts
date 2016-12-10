import { Component, Input } from '@angular/core';

import { Link } from '../../classes/link';

@Component({
  selector: 'next-nav',
  templateUrl: './next-nav.component.html',
  styleUrls: ['./next-nav.component.css']
})
export class NextNavComponent {

  @Input('pref-link')
  public prefLink: Link;

  @Input('next-link')
  public nextLink: Link;
}
