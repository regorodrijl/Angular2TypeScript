import { ConfirmationDirectivePage } from './app.po';

describe('confirmation-directive App', () => {
  let page: ConfirmationDirectivePage;

  beforeEach(() => {
    page = new ConfirmationDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
