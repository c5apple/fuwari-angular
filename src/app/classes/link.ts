export class Link {
  href: string;
  title: string;

  constructor(link: any) {
    this.href = link.href;
    this.title = link.title;
  }
}
