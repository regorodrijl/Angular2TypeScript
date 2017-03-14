import { HelloWordPage } from './app.po';

describe('hello-word App', function() {
  let page: HelloWordPage;

  beforeEach(() => {
    page = new HelloWordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
