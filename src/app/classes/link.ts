export class Link {
  href: string;
  name: string;

  constructor(link: any) {
    this.href = link.href;
    this.name = link.name;
  }
}
