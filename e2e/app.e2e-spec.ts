import { SteepmindPage } from './app.po';

describe('steepmind App', function() {
  let page: SteepmindPage;

  beforeEach(() => {
    page = new SteepmindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
