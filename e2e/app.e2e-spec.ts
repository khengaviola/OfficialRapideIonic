import { MyRapidePage } from './app.po';

describe('my-rapide App', function() {
  let page: MyRapidePage;

  beforeEach(() => {
    page = new MyRapidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
