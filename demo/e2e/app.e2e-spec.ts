import { NgxMaterialFaqDemoPage } from './app.po';

describe('faq-demo App', () => {
  let page: NgxMaterialFaqDemoPage;

  beforeEach(() => {
    page = new NgxMaterialFaqDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
