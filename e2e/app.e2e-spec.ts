import { TextilesPage } from './app.po';

describe('textiles App', function() {
  let page: TextilesPage;

  beforeEach(() => {
    page = new TextilesPage();

  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
