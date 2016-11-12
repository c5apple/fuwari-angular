import { FuwariAngularPage } from './app.po';

describe('fuwari-angular App', function() {
  let page: FuwariAngularPage;

  beforeEach(() => {
    page = new FuwariAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
