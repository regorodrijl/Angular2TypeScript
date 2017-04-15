import { CustomPipePage } from './app.po';

describe('custom-pipe App', () => {
  let page: CustomPipePage;

  beforeEach(() => {
    page = new CustomPipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
