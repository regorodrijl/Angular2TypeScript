import { ContadorPage } from './app.po';

describe('contador App', () => {
  let page: ContadorPage;

  beforeEach(() => {
    page = new ContadorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
